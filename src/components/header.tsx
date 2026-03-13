import styles from './header.module.css'
import { Phone } from 'lucide-react'

export default function Header(){
    return(
        <header className={styles.headerWrapper}>
            <div className={styles.headerInfo}>
                <img className={styles.image} src="/keBuenaLogo.png" alt="La Ke Buena Logo" />
                <div className={styles.headerContent}>
                    <h1 className={styles.headerTitle}>La Ke Buena</h1>
                    <p className={styles.caption}>Radio • FM 105.9</p>
                </div>
            </div>
            <div className={styles.radioNumber}>
                <span className={styles.icon}> 
                    <Phone className={styles.phoneIcon} size={30}/>
                </span>
                <div className={styles.numberContent}>
                    <p className={styles.numberCaption}>LLàmanos</p>
                    <h2 className={styles.number}>(620) 521-6606</h2>
                </div>
            </div>
      </header>
    )
}