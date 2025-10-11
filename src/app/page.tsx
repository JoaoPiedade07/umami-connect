"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import chefStyle from './dashboard/dashboard.module.css'

export default function Home() {

  const router = useRouter();
    const handleUserClick = () => {
        router.push("/pricing");
        console.log("Tela Pricing");
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

        <h1>Ready to learn new skills?</h1>
        <p>Get the skills from our chefs.</p>

        {/* Chefs cards */}
        <div className={chefStyle.dashboardContent}> 
           <div className={chefStyle.chefsGrid}>
             {/* Chef Card 1 */}
             <div className={chefStyle.chefCard}>
               <div className={chefStyle.chefImageContainer}>
                 <Image 
                   src="/Base.jpg" 
                   alt="Chef Hiroshi Tanaka" 
                   width={60}
                   height={60}
                   className={chefStyle.chefImage}
                 />
               </div>
               
               <div className={chefStyle.chefInfo}>
                 <h3 className={chefStyle.chefName}>Hiroshi Tanaka</h3>
                 <p className={chefStyle.chefSpecialty}>Culinária Japonesa Tradicional</p>
                 
                 <div className={chefStyle.chefRating}>
                   <div className={chefStyle.chefRatingStars}>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                   </div>
                   <span className={chefStyle.chefRatingNumber}>4.9</span>
                 </div>
               </div>
             </div>

             {/* Chef Card 2 */}
             <div className={chefStyle.chefCard}>
               <div className={chefStyle.chefImageContainer}>
                 <Image 
                   src="/sushi.jpg" 
                   alt="Chef Yuki Nakamura" 
                   width={60}
                   height={60}
                   className={chefStyle.chefImage}
                 />
               </div>
               
               <div className={chefStyle.chefInfo}>
                 <h3 className={chefStyle.chefName}>Yuki Nakamura</h3>
                 <p className={chefStyle.chefSpecialty}>Técnicas de Sushi</p>
                 
                 <div className={chefStyle.chefRating}>
                   <div className={chefStyle.chefRatingStars}>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                   </div>
                   <span className={chefStyle.chefRatingNumber}>4.8</span>
                 </div>
               </div>
             </div>

             {/* Chef Card 3 */}
             <div className={chefStyle.chefCard}>
               <div className={chefStyle.chefImageContainer}>
                 <Image 
                   src="/Base.jpg" 
                   alt="Chef Kenji Sato" 
                   width={60}
                   height={60}
                   className={chefStyle.chefImage}
                 />
               </div>
               
               <div className={chefStyle.chefInfo}>
                 <h3 className={chefStyle.chefName}>Kenji Sato</h3>
                 <p className={chefStyle.chefSpecialty}>Ramen e Noodles</p>
                 
                 <div className={chefStyle.chefRating}>
                   <div className={chefStyle.chefRatingStars}>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                   </div>
                   <span className={chefStyle.chefRatingNumber}>4.7</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
      </main>
    </div>
  );
}
