import { urlFor } from "@/sanity/lib/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faInstagram,
    faFacebook,
    faXTwitter,
    faTiktok,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faLink, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import styles from './staffView.module.css'

export default function StaffGrid({ staffData }: any){
    return(
        <section id="staff" className={styles.staffSection}>
            <div className={styles.staffGrid}>
                {staffData.map((member: any) => (
                    <div key={member._id} className={styles.staffCard}>
                        {/* Image Container */}
                        <div className={styles.imageWrapper}>
                            <img 
                                src={urlFor(member.image).url()} 
                                alt={member.name} 
                                className={styles.staffImage}
                            />
                            
                            {/* The Hover Overlay */}
                            <div className={styles.cardOverlay}>
                                {member.showname && (
                                    <div className={styles.showInfo}>
                                        <span className={styles.onAirBadge}>En Vivo</span>
                                        <h4 className={styles.showDetails}>{member.showname}</h4>
                                        <p className={styles.showDetails}>{member.showtime}</p>
                                    </div>
                                )}
                                
                                <div className={styles.socialLinks}>
                                    {/* Add a temporary piece of text here to see if the container works */}
                                    {member.socialLinks?.length > 0 ? (
                                        member.socialLinks.map((link: any, i: number) => (
                                            <a className={styles.social} href={link.url} key={i} target="_blank" rel="noreferrer">
                                                {/* This will show the name of the icon if the icon fails */}
                                                {renderIcon(link.platform)}
                                                <span className={styles.platformLabel}>{link.platform}</span> 
                                            </a>
                                        ))
                                    ) : (
                                        <span style={{color: 'gray'}}>No socials added</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Permanent Info (Visible even without hover) */}
                        <div className={styles.memberMeta}>
                            <h3>{member.name}</h3>
                            <span>{member.position}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}



function renderIcon(platform: string){
    switch (platform){
        case 'instagram': return <FontAwesomeIcon icon={faInstagram}/>;
        case 'facebook': return <FontAwesomeIcon icon={faFacebook}/>;
        case 'twitter': return <FontAwesomeIcon icon={faXTwitter}/>;
        case 'email' : return <FontAwesomeIcon icon={faEnvelope}/>;
        case 'phone': return <FontAwesomeIcon icon={faPhone}/>;
        default: return <FontAwesomeIcon icon={faLink}/>;
    }
}