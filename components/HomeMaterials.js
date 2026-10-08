"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MATERIAL_GROUPS } from "@/data/procurement";
export default function HomeMaterials() {
 const [category,setCategory] = useState("aluminium");
 const group = MATERIAL_GROUPS.find(item => item.id===category);
 return <section className="trade-section reference-products" id="products"><div className="wrap">
 <div className="section-heading"><div><p className="eyebrow">What we buy</p><h2>RELIABLE METAL SUPPLY<br/>FOR <span className="green-dark">GLOBAL TRADE.</span></h2></div><p>We buy quality scrap metal from reliable suppliers.<br/>Explore grades, identification and typical forms.</p></div>
 <div className="material-tabs" role="group" aria-label="Material categories">{MATERIAL_GROUPS.map(item => <button type="button" key={item.id} aria-pressed={category===item.id} onClick={() => setCategory(item.id)}>{item.label}</button>)}</div>
 <div aria-live="polite"><h3 className="sr-only">{group.label}</h3>{<div className="grade-grid">{group.products.map(product => <article className="material-card" key={product.id} id={product.id}><Link href={`/what-we-buy/${category}/${product.id}`} className="material-photo"><Image src={product.image} alt={product.title} fill sizes="(max-width: 700px) 100vw, 33vw"/></Link><div className="material-body"><p className="eyebrow">{group.label}</p><h3>{product.title}</h3><p>{product.description}</p><ul>{product.identification.slice(0,3).map(line => <li key={line}>{line}</li>)}</ul><Link className="text-link" href={`/what-we-buy/${category}/${product.id}`}>View details ↗</Link></div></article>)}</div>}</div>
 <div className="button-row catalog-actions"><Link className="text-link" href={`/what-we-buy/${category}`}>View all {group.label.toLowerCase()} ↗</Link><Link className="trade-button" href="/contact">Sell to Enreach ↗</Link></div>
 </div></section>;
}