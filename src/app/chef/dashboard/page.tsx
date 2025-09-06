import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import styles from './chef-dashboard.module.css';
import SignOutClientButton  from '@/app/dashboard/SignOutClientButton';

export default async function ChefDashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/auth/chef/login');
  }

  const user = await currentUser();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Chef Dashboard Header */}
        <div className={styles.chefHeader}>
          <div className={styles.chefProfile}>
            <div className={styles.chefAvatar}>
              <Image 
                src="/Base.jpg" 
                alt="Chef Profile" 
                width={80}
                height={80}
                className={styles.avatarImage}
              />
            </div>
            <div className={styles.chefInfo}>
              <h1>Chef {user?.username}</h1>
              <p>Especialista em Culinária Japonesa • 5 anos de experiência</p>
              <div className={styles.chefStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24</span>
                  <span className={styles.statLabel}>Classes</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>1.2k</span>
                  <span className={styles.statLabel}>Estudantes</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>4.9</span>
                  <span className={styles.statLabel}>Avaliação</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={styles.quickActions}>
          <button className={styles.actionButton}>
            <span className={styles.actionIcon}>📚</span>
            <span>Criar Nova Classe</span>
          </button>
          <button className={styles.actionButton}>
            <span className={styles.actionIcon}>👥</span>
            <span>Ver Estudantes</span>
          </button>
          <button className={styles.actionButton}>
            <span className={styles.actionIcon}>📊</span>
            <span>Analytics</span>
          </button>
          <button className={styles.actionButton}>
            <span className={styles.actionIcon}>⚙️</span>
            <span>Configurações</span>
          </button>
        </div>

        {/* Dashboard Content */}
        <div className={styles.dashboardContent}>
          {/* Minhas Classes Section */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Minhas Classes</h2>
              <button className={styles.viewAllButton}>Ver Todas</button>
            </div>
            
            <div className={styles.classesGrid}>
              <div className={styles.classCard}>
                <div className={styles.classImageContainer}>
                  <Image 
                    src="/Base.jpg" 
                    alt="Curso de Receitas Japonesas" 
                    width={300}
                    height={180}
                    className={styles.classImage}
                  />
                  <div className={styles.classStatus}>Ativa</div>
                </div>
                
                <div className={styles.classContent}>
                  <h3 className={styles.classTitle}>Full course of Japanese Recipes</h3>
                  <p className={styles.classDescription}>Aprenda as técnicas tradicionais da culinária japonesa</p>
                  
                  <div className={styles.classStats}>
                    <div className={styles.classStat}>
                      <span className={styles.statIcon}>👥</span>
                      <span>156 estudantes</span>
                    </div>
                    <div className={styles.classStat}>
                      <span className={styles.statIcon}>⭐</span>
                      <span>4.8 (89 avaliações)</span>
                    </div>
                    <div className={styles.classStat}>
                      <span className={styles.statIcon}>💰</span>
                      <span>R$ 299</span>
                    </div>
                  </div>

                  <div className={styles.classActions}>
                    <button className={styles.editButton}>Editar</button>
                    <button className={styles.viewButton}>Ver Detalhes</button>
                  </div>
                </div>
              </div>

              <div className={styles.classCard}>
                <div className={styles.classImageContainer}>
                  <Image 
                    src="/sushi.jpg" 
                    alt="Master Sushi Techniques" 
                    width={300}
                    height={180}
                    className={styles.classImage}
                  />
                  <div className={styles.classStatus}>Ativa</div>
                </div>
                
                <div className={styles.classContent}>
                  <h3 className={styles.classTitle}>Master Sushi Techniques</h3>
                  <p className={styles.classDescription}>Domine a arte do sushi com técnicas profissionais</p>
                  
                  <div className={styles.classStats}>
                    <div className={styles.classStat}>
                      <span className={styles.statIcon}>👥</span>
                      <span>98 estudantes</span>
                    </div>
                    <div className={styles.classStat}>
                      <span className={styles.statIcon}>⭐</span>
                      <span>4.9 (67 avaliações)</span>
                    </div>
                    <div className={styles.classStat}>
                      <span className={styles.statIcon}>💰</span>
                      <span>R$ 399</span>
                    </div>
                  </div>

                  <div className={styles.classActions}>
                    <button className={styles.editButton}>Editar</button>
                    <button className={styles.viewButton}>Ver Detalhes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Estudantes Recentes Section */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Estudantes Recentes</h2>
              <button className={styles.viewAllButton}>Ver Todos</button>
            </div>
            
            <div className={styles.studentsList}>
              <div className={styles.studentCard}>
                <div className={styles.studentAvatar}>
                  <Image 
                    src="/Base.jpg" 
                    alt="Student" 
                    width={40}
                    height={40}
                    className={styles.studentImage}
                  />
                </div>
                <div className={styles.studentInfo}>
                  <h4 className={styles.studentName}>Maria Silva</h4>
                  <p className={styles.studentClass}>Full course of Japanese Recipes</p>
                  <div className={styles.studentProgress}>
                    <span>Progresso: 75%</span>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.studentRating}>
                  <span>⭐ 4.8</span>
                </div>
              </div>

              <div className={styles.studentCard}>
                <div className={styles.studentAvatar}>
                  <Image 
                    src="/sushi.jpg" 
                    alt="Student" 
                    width={40}
                    height={40}
                    className={styles.studentImage}
                  />
                </div>
                <div className={styles.studentInfo}>
                  <h4 className={styles.studentName}>João Santos</h4>
                  <p className={styles.studentClass}>Master Sushi Techniques</p>
                  <div className={styles.studentProgress}>
                    <span>Progresso: 45%</span>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.studentRating}>
                  <span>⭐ 4.9</span>
                </div>
              </div>

              <div className={styles.studentCard}>
                <div className={styles.studentAvatar}>
                  <Image 
                    src="/Base.jpg" 
                    alt="Student" 
                    width={40}
                    height={40}
                    className={styles.studentImage}
                  />
                </div>
                <div className={styles.studentInfo}>
                  <h4 className={styles.studentName}>Ana Costa</h4>
                  <p className={styles.studentClass}>Full course of Japanese Recipes</p>
                  <div className={styles.studentProgress}>
                    <span>Progresso: 90%</span>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.studentRating}>
                  <span>⭐ 5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Analytics</h2>
            
            <div className={styles.analyticsGrid}>
              <div className={styles.analyticsCard}>
                <div className={styles.analyticsIcon}>📈</div>
                <div className={styles.analyticsContent}>
                  <h3>Receita Total</h3>
                  <p className={styles.analyticsValue}>R$ 45.230</p>
                  <span className={styles.analyticsChange}>+12% este mês</span>
                </div>
              </div>

              <div className={styles.analyticsCard}>
                <div className={styles.analyticsIcon}>👥</div>
                <div className={styles.analyticsContent}>
                  <h3>Novos Estudantes</h3>
                  <p className={styles.analyticsValue}>47</p>
                  <span className={styles.analyticsChange}>+8% este mês</span>
                </div>
              </div>

              <div className={styles.analyticsCard}>
                <div className={styles.analyticsIcon}>⭐</div>
                <div className={styles.analyticsContent}>
                  <h3>Avaliação Média</h3>
                  <p className={styles.analyticsValue}>4.8</p>
                  <span className={styles.analyticsChange}>+0.2 este mês</span>
                </div>
              </div>

              <div className={styles.analyticsCard}>
                <div className={styles.analyticsIcon}>🎯</div>
                <div className={styles.analyticsContent}>
                  <h3>Taxa de Conclusão</h3>
                  <p className={styles.analyticsValue}>78%</p>
                  <span className={styles.analyticsChange}>+5% este mês</span>
                </div>
              </div>
            </div>
          </div>
        </div>
          <SignOutClientButton />
      </main>
    </div>
  );
}
