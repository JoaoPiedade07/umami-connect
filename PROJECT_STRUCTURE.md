# Estrutura do Projeto Umami Connect

## 📁 Organização de Arquivos

### `/src/app/` - Páginas e Layouts (App Router)
```
app/
├── auth/                    # Páginas de autenticação
│   ├── chef/               # Auth específico para chefs
│   ├── login/
│   └── signup/
├── chef/                    # Páginas específicas para chefs
│   └── dashboard/
├── dashboard/               # Dashboard geral
├── pricing/                 # Página de preços (movido de components)
├── classes/                 # Páginas de classes
├── chefs/                   # Páginas de chefs
├── components/              # Componentes reutilizáveis
│   ├── footer/
│   │   ├── Footer.tsx      # PascalCase
│   │   ├── footer.module.css
│   │   └── footerDropDown/
│   │       ├── DropDown.tsx # PascalCase
│   │       └── dropDown.module.css
│   └── navBar/
│       ├── NavBar.tsx
│       └── NavBar.module.css
├── layout.tsx
└── page.tsx
```

### `/src/lib/` - Utilitários e Configurações
```
lib/
├── prisma.ts               # Configuração do Prisma
├── auth.ts                 # Funções de autenticação (movido de components)
├── utils.ts                # Funções utilitárias
└── constants.ts            # Constantes da aplicação
```

### `/prisma/` - Configuração do Banco de Dados
```
prisma/
├── schema.prisma           # Schema do banco
└── seed.ts                 # Dados iniciais
```

## ✅ Melhorias Implementadas

1. **Reorganização de Arquivos**:
   - Movido `pricing` de `components/` para `app/pricing/`
   - Removido `prisma.ts` duplicado de `components/`
   - Criado `auth.ts` em `lib/` para funções de autenticação

2. **Padronização de Nomenclatura**:
   - Todos os componentes agora usam PascalCase: `Footer.tsx`, `DropDown.tsx`
   - Arquivos de utilitários em camelCase: `auth.ts`, `utils.ts`

3. **Estrutura de Utilitários**:
   - `lib/utils.ts`: Funções utilitárias gerais
   - `lib/constants.ts`: Constantes da aplicação
   - `lib/auth.ts`: Funções específicas de autenticação

4. **Organização de Componentes**:
   - Componentes reutilizáveis em `app/components/`
   - Páginas específicas em suas respectivas pastas em `app/`

## 🎯 Convenções Seguidas

- **PascalCase**: Componentes React (`Footer.tsx`, `NavBar.tsx`)
- **camelCase**: Utilitários e funções (`auth.ts`, `utils.ts`)
- **kebab-case**: CSS modules (`footer.module.css`)
- **snake_case**: Arquivos de configuração (`schema.prisma`)

## 📝 Próximos Passos Recomendados

1. Adicionar testes unitários em `/src/__tests__/`
2. Criar hooks customizados em `/src/hooks/`
3. Adicionar tipos TypeScript em `/src/types/`
4. Implementar validação com Zod em `/src/lib/validations.ts`
