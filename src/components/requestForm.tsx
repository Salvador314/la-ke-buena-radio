'use client';
import { useState } from 'react';
import styles from './requestForm.module.css'
import { stat } from 'fs';

export default function RequestForm(){
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [ status, setStatus ] = useState<'idle' | 'success' | 'error'> ('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('idle');

        const formData = new FormData(e.currentTarget);

        try{
            const res = await fetch('/api/request-song', {
                method: 'POST',
                headers:{ 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: formData.get('name'),
                    song: formData.get('song'),
                    artist: formData.get('artist'),
                    message: formData.get('message'),
                }),
            });
            
            if (res.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            }else{
                setStatus('error');
            }
        }catch (error){
            setStatus('error');
        }finally{
            setIsSubmitting(false);
        }
    }

    return (
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
            <article className={styles.nameWrapper}>
                <label className={styles.label} htmlFor="name">Nombre</label>
                <input name='name' type="text" className={`${styles.name} ${styles.input}`} placeholder='Ej. Maria Garcia' required/>
            </article>
            <div className={styles.artistContent}>
                <div className={styles.songInfo}>
                    <label className={styles.label} htmlFor="song">Cancion</label>
                    <input name='song' type="text" className={`${styles.song} ${styles.input}`} placeholder='Titulo de la cancion' required />
                </div>
                <div className={styles.artistInfo}>
                    <label className={styles.label} htmlFor="artist">Artista</label>
                    <input name='artist' type="text" className={`${styles.artist} ${styles.input}`} placeholder='Nombre del artista'/>
                </div>
            </div>
            <article className={styles.messageWrapper}>
                <label className={styles.label} htmlFor="message">Dedicatoria</label>
                <textarea name='message' className={`${styles.message} ${styles.input}`} placeholder='Ej. Para mi mama con mucho amor en su cumpleaños' rows={3}/>
            </article>
            <div className={styles.buttonWrapper}>
                <button className={styles.formButton} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar Peticion'}
                </button>
            </div>
            <div className={styles.statusWrapper}>
                {status === 'success' && <p className={styles.successMsg}>¡Tu peticion ha sido enviada a la cabina!</p>}
                {status === 'error' && <p className={styles.errorMsg}>Hubo un error. Intenta de nuevo.</p>}
            </div>
        </form>
    )
}