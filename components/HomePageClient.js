import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FounderSection from "@/components/FounderSection";
import TrustSection from "@/components/TrustSection";
import HomeMaterials from "@/components/HomeMaterials";
import MaterialOfferForm from "@/components/MaterialOfferForm";
import { COMPANY_STATISTICS, WHY_CHOOSE_US_ITEMS, INDUSTRY_EXPERTISE, GLOBAL_PRESENCE_INDICATORS, SERVICE_OFFERINGS, INDUSTRY_FOCUS } from "@/data/homeContent";
import { COMPANY_EMAIL, COMPANY_PHONE } from "@/lib/site";
export default function HomePageClient() {
 return <><Navbar/><main id="main-content" className="trade-home reference-home">
<HeroBanner/>
<HomeMaterials/>
<FounderSection/>
<TrustSection whyChooseUsItems={WHY_CHOOSE_US_ITEMS} companyStatistics={COMPANY_STATISTICS} industryExpertise={INDUSTRY_EXPERTISE} globalPresenceIndicators={GLOBAL_PRESENCE_INDICATORS} serviceOfferings={SERVICE_OFFERINGS} industryFocus={[...INDUSTRY_FOCUS, {title:"Foundries",text:"Grade-aligned secondary metal sourcing for foundry requirements."}, {title:"Scrap Processors",text:"Material identification and preparation discussions for recovered scrap."}, {title:"Export-Focused Industrial Traders",text:"Commercial alignment and coordinated cross-border execution."}]}/>
<section className="trade-section soft-section" id="locations"><div className="wrap reach-grid"><div><p className="eyebrow">Canadian roots. International outlook.</p><h2>GLOBAL SOURCING.<br/><span className="green-dark">GLOBAL REACH.</span></h2><p>Based in Calgary, Canada, we work with international supply partners to identify dependable scrap metal sources and coordinate trade opportunities.</p><div className="reach-tags"><span>Global sourcing</span><span>Cross-border coordination</span><span>Canadian point of contact</span></div><Link href="/contact" className="text-link">Build a supply relationship ↗</Link></div><div className="reach-visual"><Image src="/sourcing-map.svg" width={800} height={420} alt="Illustrative world map showing our base in Calgary, Canada"/><strong>ONE PARTNER.<br/>GLOBAL POSSIBILITIES.</strong><p>Material review → Commercial alignment → Shipment coordination</p></div></div></section>
<section className="confidence wrap" id="client-feedback"><p className="eyebrow">Trade with confidence</p><div>{["Clear material expectations","Transparent commercial discussions","End-to-end coordination"].map(item => <h3 key={item}><span className="green-dark">✓</span> {item}</h3>)}</div></section>
<section className="trade-section wrap contact-grid" id="contact"><div><p className="eyebrow">Let's talk about your material</p><h2>READY TO<br/>TRADE <span className="green-dark">METAL?</span></h2><p>Tell us what you have or what your business needs. Share your grade, quantity and location to start a commercial discussion.</p><div className="contact-info"><a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL} ↗</a><a href={`tel:${COMPANY_PHONE.replace(/\s/g,"")}`}>{COMPANY_PHONE}</a><span>Calgary, Alberta, Canada</span></div></div><MaterialOfferForm/></section>
</main><Footer/><Link className="mobile-sell" href="/contact">Sell your scrap</Link></>;
}
