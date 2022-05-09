import express from 'express';
import cors from 'cors'

import { routes } from './routes';

const app = express();

app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(3333, ()=> {
  console.log('HTTP server runing')
})











/*  configurações iniciais
      npm init -y
      npm i typescript @types/node ts-node-dev -D
      npx tsc --init

    Mudar no arquivo tsconfig.json
      "rootDir": "./src"
      "outDir": "./dist"

    No arquivo package.json add
      "dev": "ts-node-dev src/server.ts"
    em "scripts":{}

    Express para criar as rotas
      npm i express
      npm i -D @types/express  
        (preciso instalar pois esta sendo usado typescript)

    Prisma para gerar banco de dados 
      npm i prisma -D
      npm i @prisma/client
      npx prisma init

      Rodar pra criar as tabelas 
        npx prisma migrate dev

      Mostra as tabelas
        npx prisma studio

    biblioteca pra os email
      npm install nodemailer
      npm install @types/nodemailer -D

    para rodar
      npm rum dev


    SOLID
      -Cada classe tem uma responsabilidae única
      -As classes da aplicação devem ser abertas para extensão mas fechadas para modificação
      -Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando
      -Segregar as interesses
      -Inverter dependencias de uma classe

    Ferramenta para criar os testes
      npm install jest -D
      npx jest --init
        ✔ Would you like to use Jest when running "test" script in "package.json"? … yes
        ✔ Would you like to use Typescript for the configuration file? … yes
        ✔ Choose the test environment that will be used for testing › node
        ✔ Do you want Jest to add coverage reports? … yes
        ✔ Which provider should be used to instrument code for coverage? › v8
        ✔ Automatically clear mock calls, instances, contexts and results before every test? … yes
      npm instal ts-node -D
      npm i @types/jest -D

    Instalar um compilador por ser mais rapido 
    https://swc.rs/docs/usage/jest
      npm i -D jest @swc/jest

      procurar no arquivo jest.config.ts transform: e colar 
        transform: {
            "^.+\\.(t|j)sx?$": ["@swc/jest"],
          },

    dentro da pasta "converage" sub pasta "icov-resport" abrir o "index.html" no navegar para ver o quanto seu codigo foi testado 
    
    Crontrole de segurança pro backend
      npm i cors
      npm i @types/cors -D

    Criar a pasta dist
      npx tsc
      
*/

