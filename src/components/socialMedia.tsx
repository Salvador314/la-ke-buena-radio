'use client';
import {
    SiFacebook,
    SiInstagram,
    SiX,
    SiYoutube
} from '@icons-pack/react-simple-icons';
import styles from './socialMedia.module.css';
import { link } from 'fs';

export default function SocialSideBar(){
    const socials = [
        {icon: <SiFacebook size={25}/>, link: 'https://www.facebook.com/la.ke.buena.kansas', color: '#1877F2', label: 'Facebook'},
        {icon: <SiInstagram size={25}/>, link: 'https://www.instagram.com/buenakansas/', color: '#E4405F', label: 'Instagram'},
        {icon: <SiX size={25}/>, link: 'https://twitter.com', color: '#000000', label: 'twitter'},
        {icon: <SiYoutube size={25}/>, link: 'https://youtube.com', color:'FF0000', label: 'Youtube'},
    ];

    return(
        <aside className={styles.sidebar}>
            {socials.map((social, index) => (
                <div key={index} className={styles.toolTipWrapper}>
                    <a 
                    href={social.link}
                    target="_blank"
                    rel='noopener noreferrer'
                    className={styles.iconLink}
                    style={{'--hover-color' : social.color, backgroundColor: social.color} as any}>
                        {social.icon}
                    </a>
                </div>
            ))}
        </aside>
    );
}