import styles from "./weather.module.css"
import { Droplets, Wind, Thermometer } from "lucide-react";


export default async function weatherView(){ 
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const city = "Garden City,KS,US";

    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`,
        { next: {revalidate: 900 } } 
    );
    const data = await res.json();

    if (!data || data.cod !== 200) return <p>Weather Unavailable</p>

    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    return(
        <main className={styles.weatherMain}>
            <header className={styles.weatherHeader}>
                <p className={styles.sectionLabel}>El Tiempo</p>
                <h2>Pronostico del Tiempo</h2>
                <p className={styles.cityLabel}>{data.name}, {data.sys.country}</p>
            </header>
            <div className={styles.mainReportWrapper}>
                <div className={styles.temperature}>
                    <img src={iconURL} alt={data.weather[0].description} className={styles.weatherIcon} />
                    <div className={styles.temperatureReport}>
                        <h1>{Math.round(data.main.temp)}°F</h1>
                        <p>{data.weather[0].main}</p>
                    </div>
                </div>
                <div className={styles.tempDetails}>
                    <article className={styles.tempAdditional}>
                        <Thermometer size={30} color="rgb(220, 38, 38)"/>
                        <h3>Sensacion</h3>
                        <span>{Math.round(data.main.feels_like)}°</span>
                    </article>
                    <article className={styles.tempAdditional}>
                        <Droplets size={30} color="rgb(139, 92, 246)"/>
                        <h3>Humedad</h3>
                        <span>{data.main.humidity}%</span>
                    </article>
                    <article className={styles.tempAdditional}>
                        <Wind size={30} color="rgb(79 145 248)"/>
                        <h3>Viento</h3>
                        <span>{Math.round(data.wind.speed)} mph</span>
                    </article>
                </div>
            </div>
        </main>
    )
}