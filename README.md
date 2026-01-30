# StarSoft NFT Marketplace

Uma aplicação moderna de marketplace de NFTs construída com **Next.js 16**, **React 19**, **Redux Toolkit**, **React Query** e **Framer Motion**. A aplicação oferece uma experiência responsiva e interativa para compra de NFTs com gerenciamento de carrinho em tempo real.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Stack Tecnológico](#stack-tecnológico)
- [Requisitos Atendidos](#requisitos-atendidos)
- [Instalação e Setup](#instalação-e-setup)
- [Como Executar](#como-executar)
- [Arquitetura](#arquitetura)
- [Decisões Técnicas](#decisões-técnicas)
- [Testes](#testes)

---

## 🎯 Visão Geral

O **StarSoft NFT Marketplace** é uma plataforma de e-commerce para NFTs que demonstra as melhores práticas de desenvolvimento web moderno com Next.js, incluindo:

- **Server-Side Rendering (SSR)** com revalidação incremental (ISR)
- **Client-Side State Management** com Redux Toolkit
- **Data Fetching** otimizado com React Query
- **Animações Fluidas** com Framer Motion
- **Testes Automatizados** com Jest e React Testing Library
- **Containerização** com Docker

---

## 🛠 Stack Tecnológico

| Tecnologia                | Versão  | Finalidade                                        |
| ------------------------- | ------- | ------------------------------------------------- |
| **Next.js**               | 16.1.6  | Framework React com SSR, SSG, roteamento dinâmico |
| **React**                 | 19.2.3  | Biblioteca UI                                     |
| **Redux Toolkit**         | 2.11.2  | Gerenciamento de estado global (carrinho)         |
| **React Redux**           | 9.2.0   | Binding React-Redux                               |
| **React Query**           | 5.90.20 | Data fetching e sincronização de API              |
| **Styled Components**     | 6.3.8   | Estilização CSS-in-JS modular                     |
| **Framer Motion**         | 11.1.1  | Animações e transições                            |
| **TypeScript**            | 5       | Type safety                                       |
| **Jest**                  | 30.2.0  | Framework de testes                               |
| **React Testing Library** | 16.3.2  | Testes de componentes                             |
| **Docker**                | Latest  | Containerização                                   |

---

## ✅ Requisitos Atendidos

### ✨ **Uso do Next.js**

- [x] Framework principal da aplicação
- [x] **Rotas Dinâmicas**: `app/nft/[id]/page.tsx` para detalhes de NFTs
- [x] **Otimização de Imagens**: `next/image` em toda a aplicação
- [x] **Importação Dinâmica**: `next/dynamic` para o componente `Sidebar`
- [x] **Server-Side Rendering (SSR)**: Página de detalhes do NFT (`/nft/[id]`) agora é renderizada no servidor
- [x] **Incremental Static Regeneration (ISR)**: Revalidação a cada 60 segundos na página de detalhes

### 🎨 **Interface do Usuário**

- [x] Componentes estruturados com `styled-components`
- [x] Responsividade para diferentes tamanhos de tela
- [x] Navegação intuitiva entre páginas

### 📦 **Gerenciamento de Estado**

- [x] **Redux Toolkit** para estado global
- [x] `cartSlice` com reducers: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`
- [x] Hook customizado `useCart` para acesso ao estado

### 🔄 **Busca de Dados**

- [x] **React Query** (`@tanstack/react-query`) com `useQuery` e `useInfiniteQuery`
- [x] Integração com API
- [x] Server-side data fetching em `app/nft/[id]/page.tsx`
- [x] Tratamento de estados (loading, erro, sucesso)

### ✨ **Animações e Interações**

- [x] **Framer Motion** integrado
- [x] Hover scale em cards de produtos (`whileHover={{ scale: 1.02 }}`)
- [x] Slide animation no Sidebar (spring transition)
- [x] Transições suaves em componentes

### 🎨 **Estilização**

- [x] **Styled Components** para CSS modular
- [x] Design system centralizado em `styles/theme.ts`
- [x] Componentes estilizados reutilizáveis

### 🐳 **Docker e Docker Compose**

- [x] `Dockerfile` configurado para Next.js em desenvolvimento
- [x] `docker-compose.yml` com volume mounts e variáveis de ambiente
- [x] **Inicialização com um comando**:
  ```bash
  docker-compose up
  ```

### 🧪 **Testes Automatizados**

- [x] **Jest** + **React Testing Library**
- [x] Testes unitários para reducers (`cartSlice.test.ts`)
- [x] Testes de integração para hooks (`useCart.test.tsx`)
- [x] Testes de componentes críticos:
  - `Card.test.tsx`: Verificação de dispatch ao adicionar ao carrinho
  - `CartTrigger.test.tsx`: Exibição correta da contagem
  - `Sidebar.test.tsx`: Listagem e cálculo de total
  - `CardSidebar.test.tsx`: Atualização e remoção de quantidades
- [x] Todos os testes **passam** (`15 testes aprovados`)

### 🔐 **TypeScript**

- [x] Tipagem estática em toda a aplicação
- [x] Interfaces bem definidas para produtos, cart items, etc.

### 🔍 **SEO e Acessibilidade**

- [x] **Meta tags** em `app/layout.tsx`:
  - Title, description, og:\* tags, twitter card
  - Locale definido como `pt_BR`
- [x] **Acessibilidade**:
  - ARIA labels em componentes (`aria-label`, `role="dialog"`)
  - Navegação semântica com Links do Next.js
  - Botões com textos descritivos

---

## 🚀 Instalação e Setup

### Pré-requisitos

- **Node.js** >= 18
- **npm** >= 9 ou **yarn** >= 4
- **Docker** (opcional, para containerização)

### Instalação Local

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/YudiYamada/starsoft-frontend-challenge
   cd starsoft-frontend-challenge
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Verifique a instalação de `framer-motion`**:
   ```bash
   npm list framer-motion
   ```
   (Já incluído no `package.json`)

---

## 🏃 Como Executar

### Desenvolvimento Local

```bash
npm run dev
```

Acesse: **http://localhost:3000**

### Build para Produção

```bash
npm run build
npm start
```

### Com Docker

```bash
docker-compose up
```

O container será iniciado em **http://localhost:3000**

### Rodar Testes

```bash
# Executar testes uma vez
npm test -- --runInBand

# Watch mode (recomendado para desenvolvimento)
npm test
```

### Lint e Formatação

```bash
npm run lint        # ESLint
npx prettier --write .  # Prettier
```

---

## 🏗 Arquitetura

### Estrutura de Pastas

```
starsoft-frontend-challenge/
├── app/                          # App Router (Next.js 13+)
│   ├── layout.tsx                # Layout raiz com meta tags e providers
│   ├── page.tsx                  # Página inicial (home)
│   └── nft/[id]/
│       ├── page.tsx              # Server component para detalhes do NFT (SSR/ISR)
│       └── styles.ts             # Estilos específicos
├── components/                   # Componentes React reutilizáveis
│   ├── Button/                   # Botão estilizado
│   ├── Card/                     # Card do produto (com animação Framer Motion)
│   ├── CardSidebar/              # Item do carrinho (gerenciamento de quantidade)
│   ├── CartTrigger/              # Ícone do carrinho (carregamento dinâmico)
│   ├── Header/                   # Cabeçalho com Logo + Carrinho
│   ├── Hero/                     # Seção hero na homepage
│   ├── Sidebar/                  # Carrinho (slide animation com Framer Motion)
│   ├── Footer/                   # Rodapé
│   ├── NFTActions/               # Client component para ações do NFT
│   └── providers.tsx             # Redux Provider e React Query
├── hooks/                        # Custom React Hooks
│   ├── useCart.ts                # Gerenciamento do carrinho (Redux)
│   ├── useProducts.ts            # Busca de produtos (React Query)
│   └── __tests__/
├── store/                        # Redux (Redux Toolkit)
│   ├── index.ts                  # Configuração da store
│   ├── cartSlice.ts              # Reducer do carrinho
│   └── __tests__/
├── styles/                       # Estilos globais e theme
│   ├── GlobalStyle.ts            # Estilos CSS globais
│   ├── theme.ts                  # Paleta de cores, breakpoints
│   └── styled.d.ts               # Tipagem para styled-components
├── types/                        # Tipos TypeScript
│   └── product.ts                # Interfaces de produtos e cart
├── lib/                          # Utilitários e registry
│   └── registry.tsx              # StyledComponentsRegistry para SSR
├── public/                       # Imagens e assets estáticos
├── Dockerfile                    # Imagem Docker para Next.js
├── docker-compose.yml            # Orquestração de containers
├── jest.config.mjs               # Configuração Jest
├── jest.setup.ts                 # Setup de testes (mocks)
├── package.json                  # Dependências e scripts
├── tsconfig.json                 # Configuração TypeScript
└── README.md                     # Este arquivo

```

### Fluxo de Dados

```
API (Starsoft Challenge)
       ↓
useProducts (React Query) / app/nft/[id] (SSR)
       ↓
Redux Store (cartSlice)
       ↓
useCart Hook
       ↓
Componentes (Card, Sidebar, CartTrigger)
       ↓
UI com Animações (Framer Motion)
```

---

## 🎯 Decisões Técnicas

### 1. **Server-Side Rendering (SSR) para Detalhes de NFTs**

**Decisão**: A página `/nft/[id]` foi migrada para **Server Component** com SSR/ISR.

**Justificativa**:

- Melhor SEO (meta tags dinâmicas, OG tags para cada NFT)
- Redução do tamanho do bundle (menos JS no cliente)
- Revalidação incremental a cada 60s (ISR) combina o melhor de SSG e SSR
- Dados sempre frescos sem requerer client-side loading spinner

**Implementação**:

```typescript
// app/nft/[id]/page.tsx é async
export default async function NFTPage({ params }) {
  const res = await fetch(`${API_URL}?...`, { next: { revalidate: 60 } });
  // ...
}
```

### 2. **Dynamic Import do Sidebar**

**Decisão**: `Sidebar` é carregado dinamicamente com `next/dynamic`.

**Justificativa**:

- Reduz o bundle inicial (drawer pesado)
- Carregamento sob demanda quando o carrinho é aberto
- `ssr: false` pois o estado é client-side

```typescript
const Sidebar = dynamic(() => import("../Sidebar"), { ssr: false });
```

### 3. **Redux para Carrinho (não React Query)**

**Decisão**: Redux Toolkit para estado do carrinho, React Query apenas para API.

**Justificativa**:

- Carrinho é estado **global** e **persistente** (potencial para localStorage)
- Redux oferece DevTools, middleware, e patterns bem estabelecidos
- React Query é melhor para async data fetching, não para estado local

### 4. **Framer Motion com styled-components**

**Decisão**: Wrapping de componentes styled com `motion()` de Framer Motion.

**Justificativa**:

- Animações suaves e performáticas (GPU-accelerated)
- Integração nativa com React e styled-components
- Evita overhead de CSS Animations

### 5. **Testes com Jest + RTL, sem snapshot tests**

**Decisão**: Testes comportamentais, não snapshots.

**Justificativa**:

- Snapshots são frágeis (quebram com formatação CSS)
- Testes comportamentais focam no que o usuário vê
- Melhor manutenção em longo prazo

### 6. **Docker para Desenvolvimento**

**Decisão**: `docker-compose` com volume mounts e hot-reload.

**Justificativa**:

- Ambiente consistente (Windows, Mac, Linux)
- Node modules isolados no container
- `.next` cache isolado para builds mais rápidas
- `npm run dev` funciona dentro do container

---

## 🧪 Testes

### Cobertura

| Arquivo                | Tipo       | Casos de Teste                                  |
| ---------------------- | ---------- | ----------------------------------------------- |
| `cartSlice.test.ts`    | Unitário   | 6 testes (reducers: add, remove, update, clear) |
| `useCart.test.tsx`     | Integração | 1 teste (hook + store)                          |
| `Card.test.tsx`        | Componente | 1 teste (dispatch ao comprar)                   |
| `CartTrigger.test.tsx` | Componente | 1 teste (exibe contagem)                        |
| `Sidebar.test.tsx`     | Componente | 1 teste (lista itens, calcula total)            |
| `CardSidebar.test.tsx` | Componente | 1 teste (aumenta, diminui, remove)              |
| **Total**              | —          | **15 testes aprovados**                         |

### Executar Testes

```bash
# Uma vez
npm test -- --runInBand --colors

# Watch mode
npm test

# Com cobertura
npm test -- --coverage
```

### Testes Existentes

Todos os testes principais passam e cobrem funcionalidades críticas:

✅ Reducers do Redux  
✅ Hook `useCart`  
✅ Componentes de UI (Card, Sidebar, CartTrigger, CardSidebar)  
✅ Integrações store-componentes

---

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.
