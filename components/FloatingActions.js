"use client";
import { useEffect, useRef, useState } from "react";
import { COMPANY_PHONE } from "@/lib/site";

export default function FloatingActions() {
 const [status, setStatus] = useState({ busy:false, error:"", success:"" });
 const card = useRef(null);
 const trigger = useRef(null);
 const popup = useRef(null);
 function close() { if (popup.current) popup.current.open = false; trigger.current?.focus(); }
 useEffect(() => {
  function outside(event) {
   if (!card.current?.contains(event.target) && !trigger.current?.contains(event.target) && popup.current?.open) popup.current.open = false;
  }
  function escape(event) { if (event.key === "Escape") { if (popup.current) popup.current.open = false; trigger.current?.focus(); } }
  document.addEventListener("pointerdown", outside);
  document.addEventListener("keydown", escape);
  return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape); };
 }, []);
 async function submit(event) {
  event.preventDefault();
  if (status.busy) return;
  const form = event.currentTarget;
  const data = new FormData(form);
  const fields = Object.fromEntries([...data].map(([key,value]) => [key,value.trim()]));
  if (Object.values(fields).some(value => !value)) {
   setStatus({ busy:false, error:"Please complete all fields.", success:"" }); return;
  }
  setStatus({ busy:true, error:"", success:"" });
  try {
   const response = await fetch("/api/contact", { method:"POST", headers:{ "Content-Type":"application/json" }, body:JSON.stringify({
    formType:"quick-enquiry", name:fields.name, email:fields.email, message:fields.message, details:{ companyName:fields.company },
   }) });
   const result = await response.json();
   if (!response.ok) throw new Error(result.error || "Unable to send. Please try again.");
   setStatus({ busy:false, error:"", success:"Thank you. Your enquiry has been sent." });
   form.reset();
  } catch(error) { setStatus({ busy:false, error:error.message, success:"" }); }
 }
 return <>
  <a className="corner-whatsapp" href={`https://wa.me/${COMPANY_PHONE.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with Enreach Global on WhatsApp">
   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.88 11.88 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.15 1.6 5.96L.05 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.43-8.42ZM12.04 21.8a9.87 9.87 0 0 1-5.03-1.38l-.36-.22-3.74.98 1-3.65-.24-.38A9.87 9.87 0 0 1 2.15 11.9c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.9 7c0 5.45-4.44 9.89-9.91 9.89Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.49-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"/></svg>
  </a>
  <details ref={popup} className="quick-enquiry-toggle">
   <summary ref={trigger} className="corner-enquire" aria-controls="quick-enquiry-popup">Enquire Now</summary>
   <section ref={card} id="quick-enquiry-popup" className="quick-enquiry-popup" role="dialog" aria-labelledby="quick-enquiry-heading">
   <button className="quick-enquiry-close" type="button" aria-label="Close quick enquiry" onClick={close}>&times;</button>
   <p className="quick-enquiry-label">QUICK ENQUIRY</p>
   <h2 id="quick-enquiry-heading">Quick Enquiry</h2>
   <form onSubmit={submit}>
    <input name="name" aria-label="Name" placeholder="Your Name" autoComplete="name" maxLength={200} required/>
    <input name="company" aria-label="Company" placeholder="Company Name" autoComplete="organization" maxLength={200} required/>
    <input name="email" type="email" aria-label="Email" placeholder="Your Email" autoComplete="email" maxLength={254} required/>
    <textarea name="message" aria-label="Enquiry / Requirement" placeholder="Tell us about your requirement" maxLength={5000} required/>
    <button className="quick-enquiry-send" disabled={status.busy}>{status.busy ? "Sending..." : "Send Enquiry"}</button>
    {status.error && <p className="quick-enquiry-feedback" role="alert">{status.error}</p>}
    {status.success && <p className="quick-enquiry-feedback" role="status">{status.success}</p>}
   </form>
  </section>
  </details>
 </>;
}
