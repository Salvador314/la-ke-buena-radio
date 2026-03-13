import styles from './schedule.module.css';
import { MicVocal } from 'lucide-react';

interface ShowProps{
    show: {
        _id: string;
        title: string;
        speakerNames: string;
        startTime: string;
        endTime: string;
        day: string;
    }
}

export default function Schedule({show, bgColor} : any){
    return (
        <div className={styles.scheduleRow}>
            <div className={styles.showInfo}>
                <span style={{backgroundColor: bgColor}} className={styles.micIcon}><MicVocal size={30}/></span>
                <div className={styles.showContent}>
                    <h4 className={styles.showTitle}>{show.title}</h4>
                    <p className={styles.speakers}>{show.speakerNames}</p>
                </div>
            </div>
            <div className={styles.timeRange}>
                <span className={styles.time}>{show.startTime}</span>
                <span className={styles.seperator}>-</span>
                <span className={styles.time}>{show.endTime}</span>
            </div>
        </div>
    )
}