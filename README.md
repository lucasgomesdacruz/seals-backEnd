# 🚢 Sistema de Controle de DUVs (Documentos Únicos de Viagem)

Este é um projeto fullstack desenvolvido como parte de um desafio técnico. O sistema permite o gerenciamento de navios, DUVs (Documentos Únicos de Viagem) e passageiros, com autenticação protegida por JWT, rotas privadas no frontend e funcionalidades de seed para popular o banco de dados com dados fictícios.

---

## 🛠️ Tecnologias Utilizadas

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

---
🧩 Prisma Schema – Modelagem do Banco de Dados
O sistema utiliza o Prisma ORM para modelar, acessar e gerenciar dados em um banco de dados PostgreSQL. A seguir, estão os principais modelos definidos:

👤 User
Representa os usuários que acessam o sistema (por exemplo, administradores).
🔐 Observação: A senha deve ser armazenada em formato de hash, nunca em texto plano.

🛳️ Vessel
Representa os navios que realizam as viagens.

📄 Duv (Documento Único de Viagem)
Representa um documento de viagem associado a um navio.

🧍 Passenger
Representa pessoas embarcadas em uma DUV, podendo ser passageiros ou tripulantes.

![back2](https://github.com/user-attachments/assets/3f653def-d756-4042-8fb3-abfa748db9c7)

---
🔁 Rotas da API (Express)
O projeto utiliza o Express.js como framework HTTP para a criação das rotas da aplicação. Todas as requisições passam por controllers responsáveis por tratar a lógica de cada endpoint, e algumas rotas exigem autenticação via middleware.

📁 Arquivo: routes.ts
Esse arquivo centraliza as rotas principais da aplicação, divididas em seções:

🔐 Rotas de Usuário (/users, /session, /me)

Método	Rota	Descrição

POST	/users	Cria um novo usuário. Utiliza o CreateUserController.

POST	/session	Realiza o login (autenticação). Retorna um token JWT.

GET	/me	Retorna os dados do usuário autenticado. Requer token via isAuthenticated.

🔒 Middleware: isAuthenticated
Essa função verifica se o token JWT está presente e válido. Se não estiver, a requisição é bloqueada. É usado em rotas protegidas como /me e /seed.

🌱 Rota de Seed (/seed)
Método	Rota	Descrição
GET	/seed	Popula o banco de dados com dados fakes (usuários, DUVs, navios, passageiros).

Essa rota é protegida por autenticação e utiliza o SeedController. Ela é útil para testes, carregando dados mockados no sistema.

![back1](https://github.com/user-attachments/assets/56544db6-8036-4265-8bca-463ff4daa32f)

---

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
