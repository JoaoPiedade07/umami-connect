import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function ChefDashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/auth/chef/login(.*)');
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard do Chef</h1>
      <p>Bem-vindo ao seu painel de chef!</p>
      <div style={{ marginTop: '2rem' }}>
        <h2>Suas Classes</h2>
        <p>Gerencie suas classes e receitas.</p>
        
        <h2>Estudantes</h2>
        <p>Veja seus estudantes e seu progresso.</p>
        
        <h2>Analytics</h2>
        <p>Veja estatísticas das suas classes.</p>
        
        <h2>Configurações</h2>
        <p>Configure seu perfil de chef.</p>
      </div>
    </div>
  );
}
