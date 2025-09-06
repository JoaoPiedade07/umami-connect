"use client";
import { SignIn } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    // Remove flag de chef quando faz login normal
    localStorage.removeItem('isChefLogin');
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <SignIn 
        appearance={{
          elements: {
            formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-sm normal-case',
          }
        }}
        redirectUrl="/dashboard"
        signUpUrl="/auth/signup"
      />
    </div>
  );
}
