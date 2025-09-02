"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
    const handleUserClick = () => {
        router.push("/components/pricing");
    }
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.headcard}>
          <h1>Unlock your potencial with the varius claases</h1>
          <p>Level up with our Chefs and other skills to reach your goals.</p>
          <button onClick={handleUserClick}>Get Personal Plan</button>
        </div>

        <h1>Ready to learn new skills?</h1>
        <p>Get the skills from our chefs.</p>
        {/* Grid com 3 cards de curso */}
        <div className={styles.coursesGrid}>
          {/* Card de Curso de Receitas Japonesas */}
          <div className={styles.courseCard}>
            <div className={styles.courseImageContainer}>
              <div className={styles.courseImage}>
                <Image 
                  src="/Base.jpg" 
                  alt="Logo" 
                  width={400} // Largura desejada
                  height={200} // Altura desejada
                  className={styles.courseImage}
                  style={{ width: '100%', height: 'auto' }}/>
              </div>
            </div>
            
            <div className={styles.courseContent}>
              <h2 className={styles.courseTitle}>Full course of Japanese Recipes</h2>
              
              <div className={styles.courseStats}>
                <div className={styles.rating}>
                  <span className={styles.star}>⭐</span>
                  <span className={styles.ratingNumber}>4.6</span>
                </div>
                
                <div className={styles.views}>
                  <span className={styles.viewCount}>84.4k visualizations</span>
                </div>
                
                <div className={styles.duration}>
                  <span className={styles.hours}>20.6 hours</span>
                </div>
              </div>
            </div>
          </div>
          {/* Card de Curso de Receitas Japonesas */}
          <div className={styles.courseCard}>
            <div className={styles.courseImageContainer}>
              <div className={styles.courseImage}>
                <Image src="/Base.jpg" alt="Logo" width={500} height={200}/>
              </div>
            </div>
            
            <div className={styles.courseContent}>
              <h2 className={styles.courseTitle}>Full course of Japanese Recipes</h2>
              
              <div className={styles.courseStats}>
                <div className={styles.rating}>
                  <span className={styles.star}>⭐</span>
                  <span className={styles.ratingNumber}>4.6</span>
                </div>
                
                <div className={styles.views}>
                  <span className={styles.viewCount}>84.4k visualizations</span>
                </div>
                
                <div className={styles.duration}>
                  <span className={styles.hours}>20.6 hours</span>
                </div>
              </div>
            </div>
          </div>
          {/* Card de Curso de Receitas Japonesas */}
          <div className={styles.courseCard}>
            <div className={styles.courseImageContainer}>
              <div className={styles.courseImage}>
                <Image src="/Base.jpg" alt="Logo" width={500} height={200}/>
              </div>
            </div>
            
            <div className={styles.courseContent}>
              <h2 className={styles.courseTitle}>Full course of Japanese Recipes</h2>
              
              <div className={styles.courseStats}>
                <div className={styles.rating}>
                  <span className={styles.star}>⭐</span>
                  <span className={styles.ratingNumber}>4.6</span>
                </div>
                
                <div className={styles.views}>
                  <span className={styles.viewCount}>84.4k visualizations</span>
                </div>
                
                <div className={styles.duration}>
                  <span className={styles.hours}>20.6 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
