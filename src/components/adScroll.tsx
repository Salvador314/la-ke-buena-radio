import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import styles from "./adScroll.module.css"

export default async function adScroll(){
    const ads = await client.fetch(`*[_type == "ad"]{
        _id,
        title,
        category,
        description,
        image,
        link
    }`)

    return(
        <main className={styles.adMain}>
            <header className={styles.header}>
                <p>publicidad</p>
            </header>
            <section className={styles.adSection}>
        {ads.map((ad: any) => {
          
            const bgImageUrl = ad.image ? urlFor(ad.image).width(800).url() : '';

          return (
            <div 
              key={ad._id} 
              className={styles.adCardWrapper}
              style={{ 
                backgroundImage: `url(${bgImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center' 
              }}>
                <div className={styles.cardInfo}>
                    <p className={styles.category}>{ad.category}</p>
                    <p className={styles.adLabel}>AD</p>
                </div>
                <div className={styles.cardContent}>
                    <h2 className={styles.title}>{ad.title}</h2>
                    <p className={styles.description}>{ad.description}</p>
                    <a href={ad.link} className={styles.button}>Visitar</a>
                </div>
            </div>
          );
        })}
      </section>
        </main>
    )
}