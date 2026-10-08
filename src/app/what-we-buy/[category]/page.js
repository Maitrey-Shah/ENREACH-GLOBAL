import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaterialOfferForm from "@/components/MaterialOfferForm";
import { MATERIAL_GROUPS } from "@/data/procurement";
import { buildPageMetadata } from "@/lib/seo";
export function generateStaticParams() { return MATERIAL_GROUPS.map(group => ({category:group.id})); }
export async function generateMetadata({ params }) {
 const {category} = await params; const group = MATERIAL_GROUPS.find(g => g.id===category);
 if (!group) return {};
 return buildPageMetadata({title:`${group.label} Buyer | Sell to Enreach`,description:`Sell ${group.label.toLowerCase()} to Enreach Global. Explore grades, typical forms and quality considerations. Submit your material offer.`,path:`/what-we-buy/${category}`});
}
export default async function CategoryPage({ params }) {
 const {category} = await params; const group = MATERIAL_GROUPS.find(g => g.id===category);
 if (!group) notFound();
 return <><Navbar/><main id="main-content"><section className="catalog-hero"><div className="wrap"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/what-we-buy">What we buy</Link><span>/ {group.label}</span></nav><p className="eyebrow" style={{marginTop:30}}>What we buy</p><h1>{group.label.toUpperCase()}<span className="green">.</span></h1><p>Have {group.label.toLowerCase()} available? Send us the grade, typical form, condition and quantity. We review offers against current sourcing requirements and agree quality expectations before purchase.</p><Link className="trade-button" href="#offer">Sell this material ↗</Link><div className="category-links">{MATERIAL_GROUPS.map(g => <Link key={g.id} href={`/what-we-buy/${g.id}`}>{g.label}</Link>)}</div></div></section>
 <section className="trade-section wrap"><p className="eyebrow">Grades & typical forms</p><h2>KNOW YOUR<br/><span className="green-dark">MATERIAL.</span></h2>{<div className="grade-grid">{group.products.map(product => <article className="material-card" key={product.id} id={product.id}><Link className="material-photo" href={`/what-we-buy/${category}/${product.id}`}><Image src={product.image} alt={product.title} fill sizes="(max-width: 700px) 100vw, 33vw"/></Link><div className="material-body"><h3>{product.title}</h3><p>{product.description}</p><p><strong>Typical form:</strong> {product.identification[0]}</p><p className="material-expectation"><strong>What we look for:</strong> {product.quality ? product.quality.join(", ") : "Clear grade identification, representative photos and disclosed contamination."}</p><Link className="text-link" href={`/what-we-buy/${category}/${product.id}`}>View grade & enquire ↗</Link></div></article>)}</div>}</section>
 <section className="trade-section soft-section"><div className="wrap split-heading"><div><p className="eyebrow">Clear expectations before agreement</p><h2>QUALITY<br/><span className="green-dark">COMES FIRST.</span></h2></div><div><p>Provide representative photos and disclose moisture, coatings, attachments and mixed material. Include packaging, available quantity and pickup location.</p><p>We review your offer, discuss commercial terms and coordinate shipment once agreed. Final acceptance, specifications and trade terms are confirmed by our team.</p></div></div></section>
 <section id="offer" className="trade-section wrap contact-grid"><div><p className="eyebrow">Start a buying discussion</p><h2>SELL {category.toUpperCase()}<br/>TO <span className="green-dark">ENREACH.</span></h2><p>Tell us what you have and where it is available.</p></div><MaterialOfferForm material={group.label}/></section>
 </main><Footer/></>;
}