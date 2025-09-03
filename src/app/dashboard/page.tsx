import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import SignOutClientButton  from './SignOutClientButton';
import styles from './dashboard.module.css';

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/auth/login(.*)');
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h1>Profile image</h1>
        <div className={styles.cardBtn}>
          <button className={styles.btn}>Edit profile</button>
        </div>
      </div>
    </div>
  );
}
