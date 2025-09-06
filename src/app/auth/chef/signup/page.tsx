"use client";
import { SignUp } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function ChefSignUpPage() {
  useEffect(() => {
    // Define flag no localStorage para indicar que é signup de chef
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
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Become a Chef</h1>
        <p style={{ color: '#666' }}>Join our community of professional chefs</p>
      </div>
      
      <SignUp 
        appearance={{
          elements: {
            formButtonPrimary: 'bg-orange-600 hover:bg-orange-700 text-sm normal-case',
          }
        }}
        redirectUrl="/chef/dashboard"
        signInUrl="/auth/chef/login"
      />
    </div>
  );
}
