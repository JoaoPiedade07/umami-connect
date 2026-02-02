// app/course/page.tsx
import { redirect } from 'next/navigation';

export default function CoursePage() {
  // Redireciona para a página de classes por enquanto
  redirect('/classes');
  
  // Ou você pode criar uma página real se preferir:
  /*
  return (
    <div style={{ padding: '40px' }}>
      <h1>Página de Cursos</h1>
      <p>Esta página listaria todos os cursos disponíveis.</p>
      <p>Por enquanto, você será redirecionado para a página de classes.</p>
    </div>
  );
  */
}