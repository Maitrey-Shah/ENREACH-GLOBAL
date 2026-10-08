import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaterialOfferForm from "@/components/MaterialOfferForm";
import { MATERIAL_GROUPS } from "@/data/procurement";
import { buildPageMetadata } from "@/lib/seo";
export function generateStaticParams() { return MATERIAL_GROUPS.flatMap(group => group.products.map(p => ({category:group.id,product:p.id}))); }
async function findProduct(params) {
 const {category,product} = await params; const group = MATERIAL_GROUPS.find(g => g.id===category); const item = group?.products.find(p => p.id===product); return {group,item};
}
export async function generateMetadata({params}) {
 const {group,item} = await findProduct(params); if (!item) return {};
 return buildPageMetadata({title:`Sell ${item.title} | Scrap Metal Buying`,description:item.description+" Share your quantity and location with Enreach Global for a buying discussion.",path:`/what-we-buy/${group.id}/${item.id}`});
}
export default async function ProductPage({params}) {
 const {group,item} = await findProduct(params); if (!item) notFound();
 return <><Navbar/><main id="main-content"><section className="catalog-hero"><div className="wrap"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/what-we-buy">What we buy</Link><span>/</span><Link href={`/what-we-buy/${group.id}`}>{group.label}</Link><span>/ {item.title}</span></nav><h1>{item.title.toUpperCase()}<span className="green">.</span></h1><p>{item.description}</p><Link className="trade-button" href="#offer">Sell {item.title.split(" - ")[0]} to Enreach ↗</Link></div></section>
 <section className="trade-section wrap product-grid"><div className="product-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 800px) 100vw, 50vw"/></div><div className="product-copy"><p className="eyebrow">Material identification</p><h2>Typical forms</h2><ul>{item.identification.map(line => <li key={line}>{line}</li>)}</ul><h2>What we look for</h2>{item.quality ? <ul>{item.quality.map(line => <li key={line}>{line}</li>)}</ul> : <p>Clearly identified material with representative photos. Disclose coatings, attachments, moisture and any mixed metals or contamination.</p>}<h2>Preparation & quality</h2><p>Tell us how the material is sorted and packaged. Include the available quantity, location and availability date. Discuss any preparation requirements with our team before processing or shipment.</p><p className="product-note">Descriptions help identify the material. Final quality specifications, acceptance and commercial terms are agreed during review.</p></div></section>
 <section className="trade-section soft-section" id="offer"><div className="wrap contact-grid"><div><p className="eyebrow">Commercial enquiry</p><h2>YOUR MATERIAL.<br/>OUR NEXT<br/><span className="green-dark">DISCUSSION.</span></h2><p>Offer {item.title} to our buying team. We review the details, discuss price and terms, then coordinate execution once agreed.</p></div><MaterialOfferForm material={group.label} grade={item.title}/></div></section></main><Footer/></>;
}