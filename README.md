
clone o repositório.
Abra o projeto no seu ambiente de desenvolvimento Execute no CMD

##Primeiro comando a ser rodado `npm install` - intalação das dependencias

##(Antes Verifique no arquivo .ENV a sua porta e senha, mude para o seu banco a configuração) Segundo comando a ser rodado `npx prisma migrate dev --name init` cria as tabela e o banco de dados no banco

##Terceiro comando a ser rodado `npx prisma db seed` cria os dados no banco (Acredito q o de cima ja ira fazer isso)

##Entre na pasta src/infra/QueryRelations.sql Copie o conteudo que contém la dentro, pois é o relacionamento entre as tabelas

##Abra seu mySql entre no banco criado pela aplicação e rode a query que voce colou.


##Quarto comando a ser rodado `npm run build` builda a aplicação para js

##Quinto comando a ser rodado `npm start` starta a aplicação na porta 3000
