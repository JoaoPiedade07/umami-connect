# 🗄️ Prisma Setup Guide

Este guia te ajudará a configurar o Prisma ORM no projeto Umami Connect.

## 📋 Pré-requisitos

- Node.js 18+ instalado
- PostgreSQL ou outro banco de dados suportado
- Conta no Clerk (para autenticação)

## 🚀 Configuração

### 1. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/umami_connect?schema=public"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key_here
```

### 2. Configurar o Banco de Dados

#### Opção A: PostgreSQL Local
```bash
# Instalar PostgreSQL
brew install postgresql  # macOS
# ou
sudo apt-get install postgresql postgresql-contrib  # Ubuntu

# Criar banco de dados
createdb umami_connect
```

#### Opção B: Serviços em Nuvem
- **Supabase**: https://supabase.com
- **PlanetScale**: https://planetscale.com
- **Railway**: https://railway.app
- **Neon**: https://neon.tech

### 3. Executar Migrações

```bash
# Gerar o cliente Prisma
npm run db:generate

# Aplicar migrações ao banco
npm run db:push

# Ou usar migrações versionadas
npm run db:migrate
```

### 4. Popular com Dados de Exemplo

```bash
# Executar seed
npm run db:seed
```

### 5. Visualizar Dados (Opcional)

```bash
# Abrir Prisma Studio
npm run db:studio
```

## 📊 Modelos do Banco

### User
- Integrado com Clerk
- Roles: STUDENT, CHEF, ADMIN
- Relacionamentos com enrollments, reviews, favorites

### Chef
- Perfil detalhado do chef
- Especialidades e experiência
- Sistema de rating

### Course
- Cursos com níveis (BEGINNER, INTERMEDIATE, ADVANCED)
- Sistema de preços e duração
- Relacionamento com chef e lessons

### Lesson
- Aulas organizadas por curso
- Suporte a vídeos
- Ordem sequencial

### Enrollment
- Progresso do aluno
- Status da matrícula
- Relacionamento user-course

### Review
- Sistema de avaliações (1-5 estrelas)
- Comentários opcionais
- Relacionamento user-course-chef

### Favorite
- Cursos favoritos do usuário
- Relacionamento user-course

## 🛠️ Scripts Disponíveis

```bash
npm run db:generate  # Gerar cliente Prisma
npm run db:push      # Aplicar mudanças ao banco
npm run db:migrate   # Criar migração versionada
npm run db:studio    # Interface visual do banco
npm run db:seed      # Popular com dados de exemplo
```

## 🔧 Uso no Código

```typescript
import { prisma } from '@/lib/prisma'

// Exemplo: Buscar todos os chefs
const chefs = await prisma.chef.findMany({
  include: {
    courses: true,
    reviews: true
  }
})

// Exemplo: Criar novo usuário
const user = await prisma.user.create({
  data: {
    clerkId: 'user_123',
    email: 'user@example.com',
    username: 'johndoe',
    role: 'STUDENT'
  }
})
```

## 🚨 Troubleshooting

### Erro de Conexão
- Verifique se o banco está rodando
- Confirme as credenciais no DATABASE_URL
- Teste a conexão: `npx prisma db pull`

### Erro de Migração
- Verifique se o schema está correto
- Use `npm run db:push` para desenvolvimento
- Use `npm run db:migrate` para produção

### Erro de Cliente
- Execute `npm run db:generate` após mudanças no schema
- Reinicie o servidor de desenvolvimento

## 📚 Recursos Adicionais

- [Documentação Prisma](https://www.prisma.io/docs)
- [Prisma + Next.js](https://www.prisma.io/docs/getting-started/quickstart)
- [Clerk Integration](https://clerk.com/docs)
