"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HERO_IMAGES } from "@/data/homeContent";

export default function HeroBanner() {
 const [slide,setSlide] = useState(0);
 useEffect(() => {
  const timer = window.setInterval(() => {
   if (!document.hidden) setSlide(previous => (previous + 1) % HERO_IMAGES.length);
  },2200);
  return () => window.clearInterval(timer);
 },[]);
 return <section id="home" className="hero-banner" aria-label="Industrial metal buying" aria-roledescription="carousel">
 {HERO_IMAGES.map((src,index) => <Image key={src} src={src} alt={["Aluminium-rich recovered scrap","Copper scrap wire","Used aluminium beverage cans","Copper-bearing transformers"][index]}
  fill preload={index===0} sizes="100vw" quality={95} className="hero-banner-image"
  style={{opacity:index===slide ? 1 : 0}} aria-hidden={index!==slide}/>)}
 <div className="hero-banner-shade" aria-hidden="true"/>
 <div className="hero-banner-content">
  <p className="eyebrow">Your global metal buying partner</p>
  <h1>WE BUY<br/>SCRAP METAL<span className="green">.</span><br/><span className="green">FOR GLOBAL<br/>INDUSTRY.</span></h1>
  <p className="hero-banner-description">Aluminium and copper. Sourced from trusted suppliers. Connected to international industrial demand.</p>
  <div className="button-row"><Link href="/contact" className="trade-button">Sell to Enreach ↗</Link><Link href="#products" className="hero-banner-secondary">View what we buy ↗</Link></div>
  <p className="hero-banner-trust">Global sourcing · Competitive pricing · Reliable execution</p>
  <div className="hero-banner-controls" role="group" aria-label="Hero carousel controls">
   {HERO_IMAGES.map((src,index) => <button key={src} type="button" className="hero-slide-dot" aria-label={`Show slide ${index+1}`} aria-pressed={slide===index}
    onClick={() => setSlide(index)}><span aria-hidden="true"/></button>)}
  </div>
 </div>
 </section>;
}