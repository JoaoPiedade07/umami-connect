"use client";

import { useClerk } from '@clerk/nextjs';
import styles from './dashboard.module.css';

export default function SignOutClientButton() {
  const { signOut } = useClerk();

  return (
    <button
      className={styles.btn}
      onClick={() => signOut({ redirectUrl: '/' })}
    >
      Custom sign out button
    </button>
  );
}


