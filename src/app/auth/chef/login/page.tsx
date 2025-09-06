"use client";
import { SignIn } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function ChefLoginPage() {
  useEffect(() => {
    // Define flag no localStorage para indicar que é login de chef
    localStorage.setItem('isChefLogin', 'true');
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      gap: '2rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Chef Login</h1>
        <p style={{ color: '#666' }}>Access your chef dashboard</p>
      </div>
      
      <SignIn 
        appearance={{
          elements: {
            formButtonPrimary: 'bg-orange-600 hover:bg-orange-700 text-sm normal-case',
          }
        }}
        redirectUrl="/chef/dashboard"
        signUpUrl="/auth/chef/signup"
      />
    </div>
  );
}

