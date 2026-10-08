"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { COMPANY_LOGO } from "@/lib/site";
const links = [["/", "Home"], ["/what-we-buy", "What We Buy"], ["/#about", "Our Story"], ["/#locations", "Global Reach"], ["/blog", "Insights"], ["/contact", "Contact"]];
export default function Navbar() {
 const [open, setOpen] = useState(false);
 return <header className="trade-header">
 <a className="skip-link" href="#main-content">Skip to content</a>
 <div className="trade-nav wrap">
 <Link href="/" className="trade-brand" aria-label="Enreach Global home"><Image src={COMPANY_LOGO} alt="" width={90} height={60} unoptimized/><span>ENREACH GLOBAL<small>GLOBAL METAL TRADE</small></span></Link>
 <div className="trade-nav-group">
 <nav className="trade-desktop-nav" aria-label="Main navigation">{links.map(([href,label]) => <Link href={href} key={label}>{label}</Link>)}</nav>
 <Link className="trade-button nav-cta" href="/contact">Sell to Enreach <span aria-hidden="true">↗</span></Link>
 </div>
 <button className="trade-menu" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? "Close −" : "Menu +"}</button>
 </div>
 {open && <nav id="mobile-navigation" className="trade-mobile-nav" aria-label="Mobile navigation">{links.map(([href,label]) => <Link onClick={() => setOpen(false)} href={href} key={label}>{label}</Link>)}</nav>}
 </header>;
}
