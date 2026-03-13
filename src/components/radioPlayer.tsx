'use client'; // Required because we use buttons and audio
import { useState, useRef, useEffect} from 'react';

import { Play, Pause, Volume2 } from 'lucide-react'; // Remember Lucide?
import styles from './radioPlayer.module.css';

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songTitle, setSongTitle] = useState("Cargando...");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const updateMetadata = async () => {
    try {
        const res = await fetch('/api/now-playing');
        const data = await res.json();
        
        if (data.song){
            setSongTitle(data.song);
        }
    }catch (e){
        setSongTitle("La Ke Buena 105.9 FM");
    };
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause(); 
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    updateMetadata();
    const interval = setInterval(updateMetadata, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
        <section id={styles.radioPlayerSection}>
          <header className={styles.header}>
            <div className={styles.visualizer}>
              <div className={isPlaying ? styles.barActive : styles.barPaused} />
              <div className={isPlaying ? styles.barActive : styles.barPaused} />
              <div className={isPlaying ? styles.barActive : styles.barPaused} />
              <div className={isPlaying ? styles.barActive : styles.barPaused} />
              <div className={isPlaying ? styles.barActive : styles.barPaused} />
              <div className={isPlaying ? styles.barActive : styles.barPaused} />
              <div className={isPlaying ? styles.barActive : styles.barPaused} />
              <div className={isPlaying ? styles.barActive : styles.barPaused} />
              <div className={isPlaying ? styles.barActive : styles.barPaused} />
            </div>
            <h2 className={styles.headerTitle}>Escucha La Ke Buena FM</h2>
            <p className={styles.headerCaption}>Tu musica favorita las 24 horas, los 7 dias de la semana</p>
          </header>

          <div className={styles.playerBar}>
              <audio 
                  ref={audioRef} 
                  src="https://ice23.securenetsystems.net/KSSA" 
                  preload="none" 
              />

              <div className={styles.controls}>
                  <button onClick={togglePlay} className={styles.playBtn}>
                      {isPlaying ? <Pause fill="white" /> : <Play fill="white" />}
                  </button>
                  
                  <div className={styles.info}>
                      <span className={styles.liveTag}>EN VIVO</span>
                      <p className={styles.songTitle}>
                          {songTitle}
                      </p>
                      <p className={styles.radioInfo}>FM  105.9</p>
                  </div>
              </div>
          </div>
        </section>
    </main>
  );
}