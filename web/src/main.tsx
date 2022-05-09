import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import './global.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


/* cria o porjeto 
    npm create vite@latest

  baixa dependencias 
    npm i

  roda o projeto
    npm run dev

  https://tailwindcss.com/docs/installation
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init
   
*/
//  copiar linha e trocar em tailwind.config.js 

//    content: ["./src/**/*.{html,js}"], trocando o conteudo de .{html,js} para o timpo usado no projeto "tsx"

/*  criar aquivo global.css na pasta src e colar 
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

    importar global.css em main.tsx 
      import './global.css'

  instalar icones 
    npm i phosphor-react

  https://headlessui.dev/react/dialog
    npm install @headlessui/react

  Plugins usados no FeedbackContentStep no form
    https://github.com/tailwindlabs/tailwindcss-forms
      npm install -D @tailwindcss/forms

    https://www.npmjs.com/package/tailwind-scrollbar
      npm install --save-dev tailwind-scrollbar

  instalar para usar em ScreenshotButton.tsx para gerar o print da tela
    npm i html2canvas

  Biblioteca axios 
    npm install axios

  Criando o env
    https://vitejs.dev/guide/env-and-mode.html#env-files
*/
