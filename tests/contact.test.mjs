import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
const source = await readFile(new URL("../src/app/api/contact/route.js", import.meta.url), "utf8");
const sent = [];
globalThis.__contactTestSend = async payload => { sent.push(payload); return {error:null}; };
const mockSource = source.replace('import { Resend } from "resend";', 'const Resend = class { emails = { send: payload => globalThis.__contactTestSend(payload) }; };');
const {POST} = await import("data:text/javascript;base64," + Buffer.from(mockSource).toString("base64"));
function offer() {
 const data = new FormData();
 for (const [key,value] of Object.entries({formType:"quote",inquiryType:"seller",name:"Test <Supplier>",email:"supplier@example.com",companyName:"Sample Metals",country:"Canada",material:"Copper Scrap",quantity:"20",unit:"Metric tonnes",location:"Calgary",message:"Clean copper <wire>"})) data.set(key,value);
 return data;
}
function multipart(data) { return new Request("http://localhost/api/contact",{method:"POST",body:data}); }
test("material offers validate, attach files, escape HTML and preserve the existing JSON flow", async () => {
 const originalKey = process.env.RESEND_API_KEY;
 process.env.RESEND_API_KEY = "test-only";
 try {
  const data = offer();
  data.append("documents",new Blob(["%PDF-1.7\nTest attachment"],{type:"application/pdf"}),"material.pdf");
  assert.equal((await POST(multipart(data))).status,200);
  assert.equal(sent.length,2);
  assert.equal(sent[0].replyTo,"supplier@example.com");
  assert.equal(sent[0].attachments[0].filename,"material.pdf");
  assert(sent[0].html.includes("&lt;Supplier&gt;"));
  assert(!sent[0].html.includes("Test <Supplier>"));
  const invalidEmail = offer(); invalidEmail.set("email","bad-address");
  assert.equal((await POST(multipart(invalidEmail))).status,400);
  const noQuantity = offer(); noQuantity.set("quantity","-1");
  assert.equal((await POST(multipart(noQuantity))).status,400);
  const missingLocation = offer(); missingLocation.delete("location");
  assert.equal((await POST(multipart(missingLocation))).status,400);
  const badFile = offer(); badFile.append("documents",new Blob(["not a PDF"],{type:"application/pdf"}),"fake.pdf");
  assert.equal((await POST(multipart(badFile))).status,400);
  const tooMany = offer();
  for(let i=0;i<5;i++) tooMany.append("documents",new Blob(["%PDF-1.7"],{type:"application/pdf"}),"test.pdf");
  assert.equal((await POST(multipart(tooMany))).status,400);
  const oversized = offer();
  oversized.append("documents",new Blob([new Uint8Array(8*1024*1024+1)],{type:"application/pdf"}),"large.pdf");
  assert.equal((await POST(multipart(oversized))).status,400);
  assert.equal(sent.length,2,"Rejected offers must not send emails");
  const legacy = new Request("http://localhost/api/contact",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:"Legacy enquiry",email:"test@example.com",message:"Copper sourcing"})});
  assert.equal((await POST(legacy)).status,200);
  assert.equal(sent.length,4);
  delete process.env.RESEND_API_KEY;
  const unavailable = await POST(multipart(offer()));
  assert.equal(unavailable.status,503);
  assert((await unavailable.json()).error.includes("info@enreachglobal.com"));
  assert.equal(sent.length,4);
 } finally {
  if (originalKey === undefined) delete process.env.RESEND_API_KEY;
  else process.env.RESEND_API_KEY = originalKey;
  delete globalThis.__contactTestSend;
 }
});
