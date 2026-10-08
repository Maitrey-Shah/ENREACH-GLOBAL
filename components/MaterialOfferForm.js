"use client";
import { useState } from "react";
import Link from "next/link";
const fields = [
 ["name","Name","text",true],["companyName","Company name","text",true],
 ["email","Email","email",true],["phone","Phone / WhatsApp","tel",false],
 ["country","Country","text",true],["grade","Grade / type","text",false],
 ["quantity","Quantity","number",true],["availableDate","Available date","date",false],
 ["location","Material location","text",true],
];
export default function MaterialOfferForm({ material = "", grade = "", intent = "seller" }) {
 const [mode,setMode] = useState(intent);
 const [status,setStatus] = useState({loading:false,error:"",success:""});
 async function submit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const files = data.getAll("documents").filter(file => file.size);
  if (files.length > 4 || files.reduce((total,file) => total + file.size,0) > 8 * 1024 * 1024) {
   setStatus({loading:false,error:"Upload up to 4 files, with a combined size of 8 MB or less.",success:""}); return;
  }
  data.set("formType","quote"); data.set("inquiryType",mode);
  setStatus({loading:true,error:"",success:""});
  try {
   const response = await fetch("/api/contact",{method:"POST",body:data});
   const result = await response.json();
   if (!response.ok) throw new Error(result.error || "Unable to send your enquiry. Please try again.");
   setStatus({loading:false,error:"",success:"Your enquiry has been received. Our team will review your details and contact you about the next commercial step."});
   form.reset();
  } catch(error) { setStatus({loading:false,error:error.message,success:""}); }
 }
 return <div className="offer-card">
 <div className="offer-tabs" role="group" aria-label="Enquiry type"><button type="button" aria-pressed={mode==="seller"} onClick={() => setMode("seller")}>I want to sell material</button><button type="button" aria-pressed={mode==="buyer"} onClick={() => setMode("buyer")}>I need material</button></div>
 <form onSubmit={submit} className="offer-form">
 {fields.map(([name,label,type,required]) => <label key={name}>{label}{required && <span aria-hidden="true"> *</span>}<input name={name} type={type} required={required} defaultValue={name==="grade" ? grade : undefined} min={type==="number" ? "0.001" : undefined} step={type==="number" ? "any" : undefined} maxLength={type==="text" ? 200 : undefined} autoComplete={{name:"name",email:"email",phone:"tel",companyName:"organization",country:"country-name"}[name]}/></label>)}
 <label>Material *<select name="material" required defaultValue={material}><option value="">Select material</option><option>Aluminium Scrap</option><option>Copper Scrap</option><option>Other metal</option></select></label>
 <label>Unit *<select name="unit" required><option>Metric tonnes</option><option>Kilograms</option><option>Pounds</option><option>Short tons</option></select></label>
 <label className="form-wide">Photos / documents<input name="documents" type="file" multiple accept="image/jpeg,image/png,image/webp,application/pdf"/><small>Up to 4 JPG, PNG, WebP or PDF files. 8 MB combined.</small></label>
 <label className="form-wide">Additional specifications<textarea name="message" rows={4} maxLength={5000} placeholder="Condition, preparation, packaging and any other details about your material."/></label>
 <label className="form-consent form-wide"><input type="checkbox" required/> <span>I agree that Enreach Global may contact me about this enquiry. <Link href="/privacy-policy">Privacy policy</Link>.</span></label>
 <button type="submit" disabled={status.loading} className="trade-button form-wide">{status.loading ? "Sending your enquiry..." : mode === "seller" ? "Submit material offer ↗" : "Submit sourcing enquiry ↗"}</button>
 <p className="form-wide form-note">Our team will review your material details and contact you regarding the next commercial step. All purchases are subject to review and agreed terms.</p>
 <div className="form-wide" aria-live="polite">{status.error && <p className="form-error" role="alert">{status.error}</p>}{status.success && <p className="form-success">{status.success}</p>}</div>
 </form></div>;
}