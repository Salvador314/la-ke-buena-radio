'use client';
import { useState } from 'react';
import { Calendar, Star, Bell, Megaphone, ChevronDown, ChevronUp, Icon} from 'lucide-react';
import styles from "./announcement.module.css"

const IconMap: Record<string, React.ReactNode> = {
    'Evento': <Calendar size={20} />,
    'Concurso': <Star size={20}/>,
    'Novedad': <Bell size={20}/>,
    'Aviso': <Megaphone size={20}/>,
};

const colorMap: Record<string, {bg: string, text: string}> ={
    'Evento': {bg: 'rgb(139, 92, 246)', text: 'rgb(255, 255, 255)'},
    'Concurso': {bg: 'rgb(16, 185, 129)', text: 'rgb(255, 255, 255)'},
    'Novedad': {bg: 'rgb(79, 145, 248)', text: 'rgb(255, 255, 255)'},
    'Aviso': {bg: 'rgb(245, 158, 11)', text: 'rgb(255, 255, 255)'},
}

export default function AnnouncementView({ announcement }: any){
    const [isOpen, setIsOpen] = useState(false);
    
    if (!announcement) {
        return null; // Or return <p>Cargando anuncios...</p>
    }
    
    const selectedIcon = IconMap[announcement.category] || <Bell size={20}/>;
    
    const colors = colorMap[announcement.category] || {bg: 'rgb(255, 255,255)', text: 'rgb(0, 0, 0)'};

return (
    <article className={styles.annContent}>
        <div className={styles.mainRow}>
            <span className={styles.icon} style={{backgroundColor: colors.bg, color: colors.text}}>
                {selectedIcon}
            </span>

            <div className={styles.annInfo}>
                <div className={styles.annLabels}>
                    <p className={styles.annCategory} style={{color: colors.bg}}>{announcement.category}</p>
                    <i className={styles.dot}>•</i>
                    <p className={styles.date}>
                    {announcement.eventDate ? new Date(announcement.eventDate).toLocaleDateString('es-ES',{
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                    }) : 'Proximamente'}
                    </p>
                </div>
                <h3 className={styles.annTitle}>{announcement.title}</h3>
            </div>

            {/* Dropdown Button */}
            <button 
                className={styles.dropButton} 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Description"
            >
                {isOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
        </div>

        {/* Expandable Description Section */}
        {isOpen && (
            <div className={styles.descriptionContent}>
                <p>{announcement.description}</p>
            </div>
        )}
    </article>
);
}