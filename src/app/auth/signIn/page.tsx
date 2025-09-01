"use client";
import { useRouter } from "next/navigation";

export default function SignIn() {

    const router = useRouter();
    const handleUserClick = () => {
        router.push("/auth/login");
    }

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            gap: '1rem'
        }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Sign In Page</h1>
            <p style={{ fontSize: '1.1rem', textAlign: 'center' }}>Welcome to the sign in page!</p>
            <button onClick={handleUserClick}>Log In</button>
        </div>
    )
}
