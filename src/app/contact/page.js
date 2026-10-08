import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaterialOfferForm from "@/components/MaterialOfferForm";
import { COMPANY_EMAIL, COMPANY_PHONE } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
export const metadata = buildPageMetadata({title:"Sell Your Scrap | Contact Enreach Global",description:"Have material to sell or a sourcing requirement? Share your grade, quantity and location with the Enreach Global buying team in Canada.",path:"/contact"});
export default async function ContactPage({searchParams}) {
 const query = await searchParams;
 return <><Navbar/><main id="main-content"><section className="catalog-hero"><div className="wrap"><p className="eyebrow">Your next trade starts here</p><h1>LET'S TALK<br/><span className="green-dark">METAL.</span></h1><p>Have material to sell or a sourcing requirement? Tell us what you need.</p></div></section><section className="trade-section wrap contact-grid" id="offer"><div><p className="eyebrow">Enreach Global Inc.</p><h2>YOUR MATERIAL.<br/>A COMMERCIAL<br/><span className="green-dark">CONVERSATION.</span></h2><p>Share the material, grade, quantity and location. Include photos so we can understand your offer.</p><div className="contact-info"><a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL} ↗</a><a href={`tel:${COMPANY_PHONE.replace(/\s/g,"")}`}>{COMPANY_PHONE}</a><span>Calgary, Alberta, Canada</span></div></div><MaterialOfferForm intent={query.intent==="buyer" ? "buyer" : "seller"}/></section></main><Footer/></>;
}