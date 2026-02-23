#  Community Skill-Sharing Platform

This project is a full-stack web application built with React + TypeScript + Vite on the frontend and Node.js + Express + MongoDB on the backend. It enables users to share, discover, and match skills within a community, fostering collaboration and learning.


## 🚀 Tech Stack
- Frontend: React, TypeScript, Vite
- Backend: Node.js, Express
- Database: MongoDB
- Linting & Quality: ESLint with type-aware rules, Prettier
- Authentication: JWT-based auth with protected routes
- Deployment: Flexible options (Docker, Vercel, or self-hosted)

## 🔧 Development Setup
React Plugins
Two official plugins are available for fast refresh:
- @vitejs/plugin-react (github.com in Bing) → Babel-based
- @vitejs/plugin-react-swc (github.com in Bing) → SWC-based
Choose one depending on your performance needs.



## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## 🌟 Features
- 🔐 Authentication & Authorization (JWT, protected routes)
- 📝 Skill Profiles: Users can list skills they offer and skills they want to learn
- 🔍 Skill Matching: Smart logic to connect learners with mentors
- 💬 Community Interaction: Messaging, notifications, and collaboration tools
- 📊 Analytics Dashboard: Track skill trends and engagemen

