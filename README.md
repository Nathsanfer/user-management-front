# 👥 User Management Front

Uma aplicação moderna e intuitiva para gerenciamento de usuários, desenvolvida com Next.js e JavaScript puro.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=flat-square)

---

## 📋 Sobre

- **Gerenciamento de usuários** - Crie, leia, atualize e delete usuários
- **Interface limpa** - Design responsivo e amigável
- **Roteamento dinâmico** - Navegação fluida com Next.js App Router
- **Pronto para produção** - Estrutura escalável e bem organizada

---

## ✨ Funcionalidades

- ✅ Listar todos os usuários
- ✅ Visualizar detalhes de um usuário específico
- ✅ Criar novo usuário
- ✅ Editar informações do usuário
- ✅ Deletar usuário
- ✅ Interface responsiva
- ✅ Navegação intuitiva

---

## 🛠️ Requisitos

- Node.js 18.0 ou superior
- npm, yarn, pnpm ou bun

---

## 🚀 Instalação e Uso

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/user-management-front.git
cd user-management-front
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar em desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

### 4. Build para produção

```bash
npm run build
npm run start
```

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.js              # Layout principal
│   ├── page.jsx               # Página inicial
│   ├── globals.css            # Estilos globais
│   ├── get/                   # Página de listagem/detalhes
│   │   └── [id]/              # Detalhes de usuário específico
│   ├── post/                  # Página de criar usuário
│   ├── put/                   # Página de editar usuário
│   └── delete/                # Página de deletar usuário
├── public/                    # Arquivos estáticos
└── ...
```

---

## 🔧 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org)** - Framework React com renderização no servidor
- **[React](https://react.dev)** - Biblioteca para interface de usuário
- **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** - Linguagem de programação
- **CSS Modules** - Estilos encapsulados e reutilizáveis

---

## 📚 Aprender Mais

- [Documentação do Next.js](https://nextjs.org/docs) - Recursos e funcionalidades
- [Learn Next.js](https://nextjs.org/learn) - Tutorial interativo
- [React Docs](https://react.dev) - Documentação oficial React
