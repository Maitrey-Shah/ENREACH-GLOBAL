import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MATERIAL_GROUPS, MATERIAL_IMAGES } from "@/data/procurement";
import { buildPageMetadata } from "@/lib/seo";
export const metadata = buildPageMetadata({title:"Materials We Buy | Scrap Metal Procurement",description:"Explore aluminium and copper scrap procurement. Find your grade and send a material offer to Enreach Global.",path:"/what-we-buy"});
export default function MaterialsPage() {
 return <><Navbar/><main id="main-content"><section className="catalog-hero"><div className="wrap"><p className="eyebrow">Our sourcing interests</p><h1>MATERIALS<br/>WE <span className="green-dark">BUY.</span></h1><p>Tell us what you have. Explore our metal categories, then share your grade, condition, quantity and location for a commercial review.</p><Link className="trade-button" href="/contact">Submit material offer ↗</Link></div></section><section className="trade-section wrap"><div className="material-grid">{MATERIAL_GROUPS.map(group => <article key={group.id} className="material-card"><Link className="material-photo" href={`/what-we-buy/${group.id}`}><Image src={MATERIAL_IMAGES[group.id]} alt={group.label} fill sizes="(max-width: 700px) 100vw, 33vw"/></Link><div className="material-body"><h2>{group.label}</h2><p>{group.products.map(p => p.title.split(" - ")[0]).join(" · ")}</p><Link className="text-link" href={`/what-we-buy/${group.id}`}>View category & grades ↗</Link></div></article>)}</div></section></main><Footer/></>;
}