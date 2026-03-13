'use client';
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";
import styles from './hero.module.css'

export default function HeroCarousel({slides}: any){
    const [index, setIndex] = useState(0)

    if (!slides || slides.length === 0){
        return <div className={styles.heroPlaceholder}>Cargando...</div>
    }

    useEffect(()=>{
        const timer = setInterval(()=>{
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const current = slides[index]

    const bgImageUrl = current?.image ? urlFor(current.image).url() : '/fallback-hero.jpg';

    return(
        <section className={styles.heroSection} style={{backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : 'none'}}>
            <div className={styles.heroContent}>
                <h1 className={styles.artistName}>{current.artistName}</h1>
                <p className={styles.quote}>{current.quote}</p>
                <div className={styles.dotContainer}>
                    {slides.map((_: any, i: number) => (
                        <div key={i} className={`${styles.dot} ${i === index ? styles.activeDot : ''}`} onClick={()=> setIndex(i)}>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}