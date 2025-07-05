# 🚢 Sistema de Controle de DUVs (Documentos Únicos de Viagem)

Este é um projeto fullstack desenvolvido como parte de um desafio técnico. O sistema permite o gerenciamento de navios, DUVs (Documentos Únicos de Viagem) e passageiros, com autenticação protegida por JWT, rotas privadas no frontend e funcionalidades de seed para popular o banco de dados com dados fictícios.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS (Sass)](https://sass-lang.com/)
- Rotas privadas com `React Router`
- Controle de autenticação com `JWT`

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/) para autenticação
- `Middlewares` para proteção de rotas

---

## 🔐 Funcionalidades

### Frontend
- Login com persistência de token JWT
- Rotas privadas para usuários autenticados
- Listagem de navios, DUVs e passageiros
- Visualização de detalhes por entidade

### Backend
- Registro de usuário
- Autenticação com geração de token JWT
- Middleware de validação do token
- Rota protegida para retorno de dados do usuário logado
- Rota `/seed` para popular o banco de dados com:
  - 10 navios
  - Cada navio com uma DUV
  - Cada DUV com um passageiro e um tripulante

---

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

### 2. Configuração do Backend
📦 Instale as dependências

cd backend
npm install

### 3 ⚙️ Configure o .env
Crie um arquivo .env com as variáveis:

DATABASE_URL=postgresql://usuario:senha@localhost:5432/seu_banco
JWT_SECRET=sua_chave_secreta
PORT=3333

🧱 Rode as migrations e o Prisma Client

npx prisma migrate dev
npx prisma generate

▶️ Inicie o servidor
npm run dev
```
