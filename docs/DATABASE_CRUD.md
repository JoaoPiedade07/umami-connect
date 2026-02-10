# Base de dados SQLite – Cursos e Chefs (CRUD)

O projeto usa **SQLite** com **Prisma** para persistir chefs e cursos. As operações CRUD estão expostas em rotas API REST.

## Configuração

1. **Variável de ambiente** (em `.env` na raiz do projeto):

```env
DATABASE_URL="file:./dev.db"
```

O ficheiro `prisma/dev.db` é criado automaticamente ao correr `db push` (recomendado para SQLite) ou migrações.

2. **Criar/atualizar o schema e a base de dados**:

```bash
yarn db:generate   # gera o Prisma Client
yarn db:push       # aplica o schema ao SQLite (cria/atualiza dev.db)
```

3. **Dados iniciais (opcional)**:

```bash
yarn db:seed
```

## API – Chefs

| Método | URL | Descrição |
|--------|-----|-----------|
| `GET` | `/api/chefs` | Listar todos os chefs |
| `GET` | `/api/chefs?includeCourses=true` | Listar chefs com cursos |
| `POST` | `/api/chefs` | Criar chef |
| `GET` | `/api/chefs/:id` | Obter um chef |
| `GET` | `/api/chefs/:id?includeCourses=true` | Obter chef com cursos |
| `PUT` | `/api/chefs/:id` | Atualizar chef |
| `DELETE` | `/api/chefs/:id` | Apagar chef |

### Exemplo – Criar chef (POST /api/chefs)

```json
{
  "clerkId": "user_xxx",
  "email": "chef@example.com",
  "username": "chef_name",
  "firstName": "Nome",
  "lastName": "Apelido",
  "imageUrl": "/chef.jpg",
  "bio": "Bio do chef",
  "specialty": "Culinária Japonesa",
  "experience": 10,
  "isVerified": true
}
```

### Exemplo – Atualizar chef (PUT /api/chefs/:id)

Enviar apenas os campos a alterar:

```json
{
  "bio": "Nova bio",
  "specialty": "Sushi",
  "experience": 12
}
```

---

## API – Cursos

| Método | URL | Descrição |
|--------|-----|-----------|
| `GET` | `/api/courses` | Listar todos os cursos |
| `GET` | `/api/courses?includeChef=false` | Listar sem dados do chef |
| `GET` | `/api/courses?published=true` | Apenas cursos publicados |
| `GET` | `/api/courses?chefId=xxx` | Cursos de um chef |
| `POST` | `/api/courses` | Criar curso |
| `GET` | `/api/courses/:id` | Obter um curso |
| `GET` | `/api/courses/:id?includeLessons=true` | Curso com aulas |
| `PUT` | `/api/courses/:id` | Atualizar curso |
| `DELETE` | `/api/courses/:id` | Apagar curso |

### Exemplo – Criar curso (POST /api/courses)

```json
{
  "title": "Curso de Receitas Japonesas",
  "description": "Aprenda o essencial da culinária japonesa.",
  "imageUrl": "/culinaria.webp",
  "price": 89.99,
  "duration": 20,
  "level": "BEGINNER",
  "category": "Culinária Japonesa",
  "isPublished": true,
  "chefId": "<id_do_chef>"
}
```

`level` deve ser: `BEGINNER`, `INTERMEDIATE` ou `ADVANCED`.

### Exemplo – Atualizar curso (PUT /api/courses/:id)

```json
{
  "title": "Novo título",
  "price": 79.99,
  "isPublished": true
}
```

---

## Prisma Studio

Para inspecionar e editar dados no browser:

```bash
yarn db:studio
```

Abre em `http://localhost:5555`.
