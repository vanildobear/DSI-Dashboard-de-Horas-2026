<<<<<<< HEAD
# 🚀 Projeto - Desenvolvimento de Software I - Express + Next.js + TypeScript + MySQL + Docker 2026

Projeto base com arquitetura moderna usando Express para o backend, Next.js para o frontend, TypeScript em ambos, e Docker para containerização.

## 📋 Estrutura do Projeto

```
projetoaccte/
├── backend/              # API Express + TypeScript
│   ├── src/
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   ├── .dockerignore
│   └── .env.example
├── frontend/             # Aplicação Next.js + TypeScript
│   ├── src/
│   │   ├── pages/
│   │   │   └── index.tsx
│   │   └── styles/
│   │       └── home.styles.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── Dockerfile
│   ├── .dockerignore
│   └── .env.local.example
├── docker-compose.yml
├── .gitignore
└── README.md
```

## 🛠️ Tecnologias

- **Backend**: Express 4.18 + TypeScript
- **Frontend**: Next.js 14 + TypeScript + React 18
- **Container**: Docker + Docker Compose
- **Node.js**: 20 (Alpine)

## 📂 Organização do Projeto

### Backend (`backend/`)
```
src/
├── index.ts          # Arquivo principal com configuração da API
```

**Configuração TypeScript:**
- `tsconfig.json` - Configuração do compilador TypeScript
- `Dockerfile` - Imagem Docker multi-stage otimizada

### Frontend (`frontend/`)
```
src/
├── pages/
│   └── index.tsx     # Página Home com integração com backend
└── styles/
    └── home.styles.ts     # Estilos centralizados (CSS-in-JS)
```

**Configuração TypeScript:**
- `tsconfig.json` - Configuração do compilador TypeScript
- `tsconfig.node.json` - Configuração para Node (next.config.js)
- `next.config.js` - Configuração do Next.js com variáveis de ambiente

## 📦 Instalação Local (sem Docker)

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend rodará em `http://localhost:3001`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend rodará em `http://localhost:3000`

## 🐳 Instalação com Docker

### Pré-requisitos
- Docker e Docker Compose instalados

### Executar

```bash
# Build e inicia os containers
docker-compose up --build

# Apenas iniciar sem rebuild
docker-compose up

# Parar os containers
docker-compose down

# Parar e remover volumes
docker-compose down -v
```

O projeto estará disponível em:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/api/health

## 📝 Variáveis de Ambiente

### Backend (.env)

```
PORT=3001
NODE_ENV=development
```

### Frontend (.env.local)

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 🚀 Scripts Disponíveis

### Backend

- `npm run dev` - Inicia modo desenvolvimento com ts-node
- `npm run build` - Compila TypeScript para JavaScript
- `npm start` - Executa a build compilada
- `npm run lint` - Executa linter

### Frontend

- `npm run dev` - Inicia modo desenvolvimento
- `npm run build` - Build para produção
- `npm start` - Executa a build de produção
- `npm run lint` - Executa linter

## 🎨 Estrutura de Estilos (Frontend)

Os estilos do frontend estão organizados de forma modular na pasta `src/styles`:

```
frontend/src/styles/
└── home.styles.ts    # Estilos da página Home (CSS-in-JS com React.CSSProperties)
```

### Como Usar

```typescript
// Em qualquer componente
import { homeStyles } from '@/styles/home.styles';

// Usar os estilos
<div style={homeStyles.container}>
  <h1 style={homeStyles.title}>Título</h1>
</div>
```

**Vantagens dessa abordagem:**
- ✅ Estilos centralizados e reutilizáveis
- ✅ Type-safe com TypeScript
- ✅ Fácil manutenção e organização
- ✅ Separação de responsabilidades
- ✅ Escalável para múltiplos componentes

## 📡 API Endpoints

- `GET /api/health` - Health check do backend
- `GET /api/hello` - Retorna mensagem de boas-vindas

## 🔄 Comunicação Frontend-Backend

O frontend está configurado para se comunicar com o backend via variável de ambiente `NEXT_PUBLIC_API_URL`. Quando rodando com Docker Compose, usa `http://backend:3001` (DNS do Docker), e em desenvolvimento local usa `http://localhost:3001`.

## 🐛 Troubleshooting

### Container não inicia

```bash
# Verificar logs
docker-compose logs

# Verificar logs de um serviço específico
docker-compose logs backend
docker-compose logs frontend
```

### Porta já em uso

```bash
# Matar processo na porta
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

## 📚 Recursos Adicionais

- [Express Documentation](https://expressjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Docker Documentation](https://docs.docker.com/)

## 📄 Licença

MIT
=======
# 🚀 Projeto - Desenvolvimento de Software I - Express + Next.js + TypeScript + MySQL + Docker 2026

Projeto base com arquitetura moderna usando Express para o backend, Next.js para o frontend, TypeScript em ambos, e Docker para containerização.

## 📋 Estrutura do Projeto

```
projetoaccte/
├── backend/              # API Express + TypeScript
│   ├── src/
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   ├── .dockerignore
│   └── .env.example
├── frontend/             # Aplicação Next.js + TypeScript
│   ├── src/
│   │   ├── pages/
│   │   │   └── index.tsx
│   │   └── styles/
│   │       └── home.styles.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── Dockerfile
│   ├── .dockerignore
│   └── .env.local.example
├── docker-compose.yml
├── .gitignore
└── README.md
```

## 🛠️ Tecnologias

- **Backend**: Express 4.18 + TypeScript
- **Frontend**: Next.js 14 + TypeScript + React 18
- **Container**: Docker + Docker Compose
- **Node.js**: 20 (Alpine)

## 📂 Organização do Projeto

### Backend (`backend/`)
```
src/
├── index.ts          # Arquivo principal com configuração da API
```

**Configuração TypeScript:**
- `tsconfig.json` - Configuração do compilador TypeScript
- `Dockerfile` - Imagem Docker multi-stage otimizada

### Frontend (`frontend/`)
```
src/
├── pages/
│   └── index.tsx     # Página Home com integração com backend
└── styles/
    └── home.styles.ts     # Estilos centralizados (CSS-in-JS)
```

**Configuração TypeScript:**
- `tsconfig.json` - Configuração do compilador TypeScript
- `tsconfig.node.json` - Configuração para Node (next.config.js)
- `next.config.js` - Configuração do Next.js com variáveis de ambiente

## 📦 Instalação Local (sem Docker)

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend rodará em `http://localhost:3001`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend rodará em `http://localhost:3000`

## 🐳 Instalação com Docker

### Pré-requisitos
- Docker e Docker Compose instalados

### Executar

```bash
# Build e inicia os containers
docker-compose up --build

# Apenas iniciar sem rebuild
docker-compose up

# Parar os containers
docker-compose down

# Parar e remover volumes
docker-compose down -v
```

O projeto estará disponível em:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/api/health

## 📝 Variáveis de Ambiente

### Backend (.env)

```
PORT=3001
NODE_ENV=development
```

### Frontend (.env.local)

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 🚀 Scripts Disponíveis

### Backend

- `npm run dev` - Inicia modo desenvolvimento com ts-node
- `npm run build` - Compila TypeScript para JavaScript
- `npm start` - Executa a build compilada
- `npm run lint` - Executa linter

### Frontend

- `npm run dev` - Inicia modo desenvolvimento
- `npm run build` - Build para produção
- `npm start` - Executa a build de produção
- `npm run lint` - Executa linter

## 🎨 Estrutura de Estilos (Frontend)

Os estilos do frontend estão organizados de forma modular na pasta `src/styles`:

```
frontend/src/styles/
└── home.styles.ts    # Estilos da página Home (CSS-in-JS com React.CSSProperties)
```

### Como Usar

```typescript
// Em qualquer componente
import { homeStyles } from '@/styles/home.styles';

// Usar os estilos
<div style={homeStyles.container}>
  <h1 style={homeStyles.title}>Título</h1>
</div>
```

**Vantagens dessa abordagem:**
- ✅ Estilos centralizados e reutilizáveis
- ✅ Type-safe com TypeScript
- ✅ Fácil manutenção e organização
- ✅ Separação de responsabilidades
- ✅ Escalável para múltiplos componentes

## 📡 API Endpoints

- `GET /api/health` - Health check do backend
- `GET /api/hello` - Retorna mensagem de boas-vindas

## 🔄 Comunicação Frontend-Backend

O frontend está configurado para se comunicar com o backend via variável de ambiente `NEXT_PUBLIC_API_URL`. Quando rodando com Docker Compose, usa `http://backend:3001` (DNS do Docker), e em desenvolvimento local usa `http://localhost:3001`.

## 🐛 Troubleshooting

### Container não inicia

```bash
# Verificar logs
docker-compose logs

# Verificar logs de um serviço específico
docker-compose logs backend
docker-compose logs frontend
```

### Porta já em uso

```bash
# Matar processo na porta
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

## 📚 Recursos Adicionais

- [Express Documentation](https://expressjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Docker Documentation](https://docs.docker.com/)

## 📄 Licença

MIT
>>>>>>> 1dcb35b57e88cf80546c0044b3716bd0bd2b0e25
