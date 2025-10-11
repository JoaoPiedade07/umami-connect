export const APP_CONFIG = {
  name: 'Umami Connect',
  description: 'Plataforma de cursos de culinária japonesa',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
} as const

export const ROUTES = {
  HOME: '/',
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    CHEF_LOGIN: '/auth/chef/login',
    CHEF_SIGNUP: '/auth/chef/signup',
  },
  DASHBOARD: '/dashboard',
  CHEF_DASHBOARD: '/chef/dashboard',
  PRICING: '/pricing',
  CLASSES: '/classes',
  CHEFS: '/chefs',
} as const

export const USER_ROLES = {
  STUDENT: 'STUDENT',
  CHEF: 'CHEF',
  ADMIN: 'ADMIN',
} as const

export const COURSE_LEVELS = {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED',
} as const
