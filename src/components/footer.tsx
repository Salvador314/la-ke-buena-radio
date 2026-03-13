import styles from "./footer.module.css"
import { Phone, MapPin, Mail} from "lucide-react"
import Link from 'next/link'


export default function Footer(){
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerContent}>
                <header className={styles.footerSection}>
                    <div className={styles.logoWrapper}>
                        <img className={styles.image} src="/keBuenaLogo.png" alt="La Ke Buena Logo" />
                        <div className={styles.logoInfo}>
                            <h2 className={styles.radioTitle}>La Ke Buena</h2>
                            <p className={styles.radioCaption}>Radio FM • 105.9</p>
                        </div>
                    </div>
                    <p className={styles.description}>La estacion #1 para la comunidad latina. Musica, noticias y entretenimiento las 24 horas</p>
                </header>
                <div className={styles.footerSection}>
                    <h3 className={styles.categoryTitle}>Contacto</h3>
                    <ul className={styles.listWrapper}>
                        <li className={styles.listItem}><Phone size={20}/> <a href="tel:6205216606" className={styles.phoneLink}>(620) 276-2366</a></li>
                        <li className={styles.listItem}><Mail size={20}/>jmartinez@wksradio.com</li>
                        <li className={styles.listItem}><MapPin size={20}/> 1402 E. Kansas Ave., Garden City, KS, 67846</li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h3 className={styles.categoryTitle}>Enlaces</h3>
                    <ul className={styles.listWrapper}>
                        <li className={styles.listItem}><Link href="#radio">Escucha en Vivo</Link></li>
                        <li className={styles.listItem}><Link href="#clima">El Clima</Link></li>
                        <li className={styles.listItem}> <Link href="#publicidad">Publicidad</Link></li>
                        <li className={styles.listItem}><Link href="#anuncios">Avisos</Link></li>
                        <li className={styles.listItem}><Link href="#request">Pide tu musica</Link></li>
                        <li className={styles.listItem}> <Link href="#programacion">Programacion</Link></li>
                        <li className={styles.listItem}> <Link href="#staff">Facultad</Link></li>
                    </ul>
                </div>
            </div>
            <span className={styles.break}></span>
            <p className={styles.copyright}>
                &copy; 2026 La Ke Buena Radio FM 105.9. Todos los derechos reservados.
            </p>
        </footer>
    )
}