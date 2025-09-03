import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/profile(.*)',
  '/settings(.*)',
  '/my-classes(.*)'
]);

const isChefRoute = createRouteMatcher([
  '/chef/dashboard(.*)',
  '/chef/classes(.*)',
  '/chef/students(.*)',
  '/chef/analytics(.*)'
]);

const isPublicRoute = createRouteMatcher([
  '/',
  '/auth(.*)',
  '/components/pricing(.*)',
  '/about(.*)',
  '/contact(.*)',
  '/search(.*)',
  '/signup(.*)',
  '/login(.*)'
]);

export default clerkMiddleware(async (auth, req) => {
  // Protege rotas gerais
  if (isProtectedRoute(req)) {
     await auth.protect();
  }
  
  // Protege rotas de chef (pode adicionar lógica específica aqui)
  if (isChefRoute(req)) {
    await auth.protect();
    // Aqui você pode adicionar verificação se o usuário é chef
    // const { userId } = auth();
    // Verificar se userId tem role de chef
  }
  
  // Rotas públicas não precisam de verificação
  if (isPublicRoute(req)) {
    return;
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
