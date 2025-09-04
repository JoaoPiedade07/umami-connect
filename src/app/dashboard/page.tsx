import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import SignOutClientButton  from './SignOutClientButton';
import styles from './dashboard.module.css';
import Image from 'next/image';

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/auth/login');
  }

  const user = await currentUser();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Dashboard Header */}
        <div className={styles.dashboardHeader}>
          <h1>Bem-vindo, {user?.username}!</h1>
          <p>Estudante • Continue sua jornada culinária</p>
        </div>

        {/* Dashboard Content */}
        <div className={styles.dashboardContent}>
          <h2 className={styles.sectionTitle}>Suas Classes</h2>
          
          <div className={styles.classesGrid}>
            <div className={styles.courseCard}>
              <div className={styles.courseImageContainer}>
                <Image 
                  src="/Base.jpg" 
                  alt="Curso de Receitas Japonesas" 
                  width={400}
                  height={200}
                  className={styles.courseImage}
                />
              </div>
              
              <div className={styles.courseContent}>
                <h3 className={styles.courseTitle}>Full course of Japanese Recipes</h3>
                
                <div className={styles.courseStats}>
                  <div className={styles.rating}>
                    <span className={styles.star}>⭐</span>
                    <span className={styles.ratingNumber}>4.6</span>
                  </div>
                  
                  <div className={styles.views}>
                    <span>84.4k visualizações</span>
                  </div>
                  
                  <div className={styles.duration}>
                    <span>20.6 horas</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className={styles.progressContainer}>
                  <div className={styles.progressLabel}>
                    <span>Progresso</span>
                    <span>65%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Course Card */}
            <div className={styles.courseCard}>
              <div className={styles.courseImageContainer}>
                <Image 
                  src="/sushi.jpg" 
                  alt="Curso de Sushi" 
                  width={400}
                  height={200}
                  className={styles.courseImage}
                />
              </div>
              
              <div className={styles.courseContent}>
                <h3 className={styles.courseTitle}>Master Sushi Techniques</h3>
                
                <div className={styles.courseStats}>
                  <div className={styles.rating}>
                    <span className={styles.star}>⭐</span>
                    <span className={styles.ratingNumber}>4.8</span>
                  </div>
                  
                  <div className={styles.views}>
                    <span>92.1k visualizações</span>
                  </div>
                  
                  <div className={styles.duration}>
                    <span>15.3 horas</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className={styles.progressContainer}>
                  <div className={styles.progressLabel}>
                    <span>Progresso</span>
                    <span>30%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className={styles.dashboardContent}>
           <h2 className={styles.sectionTitle}>Seus chefs preferidos:</h2>
           
           <div className={styles.chefsGrid}>
             {/* Chef Card 1 */}
             <div className={styles.chefCard}>
               <div className={styles.chefImageContainer}>
                 <Image 
                   src="/Base.jpg" 
                   alt="Chef Hiroshi Tanaka" 
                   width={60}
                   height={60}
                   className={styles.chefImage}
                 />
               </div>
               
               <div className={styles.chefInfo}>
                 <h3 className={styles.chefName}>Hiroshi Tanaka</h3>
                 <p className={styles.chefSpecialty}>Culinária Japonesa Tradicional</p>
                 
                 <div className={styles.chefRating}>
                   <div className={styles.chefRatingStars}>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                   </div>
                   <span className={styles.chefRatingNumber}>4.9</span>
                 </div>
               </div>
             </div>

             {/* Chef Card 2 */}
             <div className={styles.chefCard}>
               <div className={styles.chefImageContainer}>
                 <Image 
                   src="/sushi.jpg" 
                   alt="Chef Yuki Nakamura" 
                   width={60}
                   height={60}
                   className={styles.chefImage}
                 />
               </div>
               
               <div className={styles.chefInfo}>
                 <h3 className={styles.chefName}>Yuki Nakamura</h3>
                 <p className={styles.chefSpecialty}>Técnicas de Sushi</p>
                 
                 <div className={styles.chefRating}>
                   <div className={styles.chefRatingStars}>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                   </div>
                   <span className={styles.chefRatingNumber}>4.8</span>
                 </div>
               </div>
             </div>

             {/* Chef Card 3 */}
             <div className={styles.chefCard}>
               <div className={styles.chefImageContainer}>
                 <Image 
                   src="/Base.jpg" 
                   alt="Chef Kenji Sato" 
                   width={60}
                   height={60}
                   className={styles.chefImage}
                 />
               </div>
               
               <div className={styles.chefInfo}>
                 <h3 className={styles.chefName}>Kenji Sato</h3>
                 <p className={styles.chefSpecialty}>Ramen e Noodles</p>
                 
                 <div className={styles.chefRating}>
                   <div className={styles.chefRatingStars}>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                     <span>⭐</span>
                   </div>
                   <span className={styles.chefRatingNumber}>4.7</span>
                 </div>
               </div>
             </div>
           </div>
         </div>

        {/* Sign Out Button */}
        <SignOutClientButton />
      </main>
    </div>
  );
}
