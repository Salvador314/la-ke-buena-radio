export const dynamic = 'force-dynamic';
import Image from "next/image";
import styles from "./page.module.css";
import AdScroll from "../../components/adScroll"
import WeatherView from "../../components/weather"
import RadioPlayer from "../../components/radioPlayer"
import RequestForm from "../../components/requestForm"
import AnnouncementView from "../../components/announcement";
import SocialSideBar from "../../components/socialMedia";
import Schedule from "../../components/schedule";
import HeroCarousel from "../../components/hero";
import StaffGrid from "@/components/staffView";
import { client } from "@/sanity/lib/client";


export default async function Home() {
  const announcements = await client.fetch(`*[_type == "announcement"] | order(eventDate desc)`, {}, {cache: 'no-store'});
  const schedule = await client.fetch(`*[_type == "schedule"] | order(startTime asc)`,
    {},
    {cache: 'no-store'}
  );
  const heroSlides = await client.fetch(`*[_type == "heroSlide"]{
    _id,
    artistName,
    quote,
    image
  }`);
  const scheduleColors = [
    'rgb(139, 92, 246)',
    'rgb(16, 185, 129)',
    'rgb(79, 145, 248)',
    'rgb(245, 158, 11)',
  ]

  const STAFF_QUERY = `*[_type == "staff"] | order(_createdAt asc){
    _id,
    name,
    position,
    image, 
    showname,
    showtime,
    socialLinks[]{
      platform,
      url
    }
  }`;
const staff = await client.fetch(STAFF_QUERY)

  const sortedSchedule = [...schedule].sort((a, b) =>{
    const parseTime = (timeStr: string) =>{
      const [time, modifier] = timeStr.split(' ');
      let [hours, minutes] = time.split(':').map(Number);

      if (modifier === 'PM' && hours < 12) hours += 12;
      if (modifier === 'AM' && hours === 12) hours = 0;
      
      return hours * 100 + (minutes || 0);
    };

    return parseTime(a.startTime) - parseTime(b.startTime)
  })

  return (
    <main className={styles.page}>
        <HeroCarousel slides={heroSlides || []}/>

      
      <section id="radio">
        <RadioPlayer/>
      </section>

      <section id="clima" className={styles.sectionWrappers}>
        <WeatherView/>
      </section>

      <section id="publicidad" className={styles.sectionWrappers}>
      <AdScroll/>
      </section>

      {announcements.length == 0 && <p>No hay anuncios por el momento</p>}
      <section id="anuncios" className={`${styles.announcementSection} ${styles.sectionWrappers}`}>
        <header className={styles.sectionHeader}>
              <p className={styles.sectionCaption}>Avisos</p>
              <h2 className={`${styles.sectionTitle} ${styles.styleTwoTitle}`}>Anuncios & Novedades</h2>
              <p className={styles.sectionLabel}>Mantente al dia con lo ultimo de La Ke Buena Radio FM</p>
          </header>
          <div className={styles.annWrapper}>
              {announcements.map((item: any) => (
                  // Make sure you are passing 'announcement={item}'
                  <AnnouncementView key={item._id} announcement={item} />
              ))}
          </div>
      </section>

      <section id="request" className={`${styles.requestSection} ${styles.sectionWrappers}`}>
        <header className={styles.sectionHeader}>
            <p className={styles.sectionCaption}>Pide tu musica</p>
            <h2 className={`${styles.sectionTitle} ${styles.styleTwoTitle}`}>Cabina en Vivo</h2>
            <p className={styles.sectionLabel}>Mandale un saludo a tus seres queridos</p>
        </header>
        <RequestForm/>
      </section>

      <section id="programacion" className={`${styles.scheduleSection} ${styles.sectionWrappers}`}>
        <header className={styles.sectionHeader}>
          <p className={styles.sectionCaption}>Programacion</p>
          <h2 className={`${styles.sectionTitle} ${styles.styleOneTitle}`}>Nuestros Programas</h2>
          <p className={styles.sectionLabel}>Musica, entretenimiento y la mejor compañia las 24 horas</p>
        </header>
        <div className={styles.scheduleGrid}>
          {sortedSchedule.map((item: any, index: number)=> (
            <Schedule key={item._id} show={item} bgColor={scheduleColors[index % scheduleColors.length]}/>
          ))}
        </div>
      </section>

      <section id="staff" className={`${styles.staffSection} ${styles.sectionWrappers}`}>
        <header className={styles.sectionHeader}>
            <p className={styles.sectionCaption}>Facultad</p>
            <h2 className={`${styles.sectionTitle} ${styles.styleOneTitle}`}>Nuestro Equipo</h2>
            <p className={styles.sectionLabel}>Conoce a nuestro gran equipo</p>
          </header>
          <StaffGrid staffData={staff}/>
      </section>

      <SocialSideBar/>
    </main>
  );
}
