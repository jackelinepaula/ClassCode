# Bem vindo ao ClassCode 💻🖱️:

O ClassCode é uma plataforma web com o objetivo de conectar tutor e estudante de programação. O foco é oferecer suporte desde os iniciantes até os mais experientes!

## Tecnologias utilizadas
- Html
- Css
- Handlebars
- Javascript
- NodeJS
- Firebase
- MySQL

## Pré-requisitos testar a aplicação
- Ter o NodeLTS instalado na sua máquina.
- Ter um ambiente mysql configurado.
- Nesse mesmo ambiente mysql, crie um banco com o nome 'classcode'.

## Como usar

(Se deseja rodar o projeto na sua máquina)

1.Clone o repositório

(com http)
   ````
   git clone https://github.com/JV-projects/chromodoro-app.git
   ````
(com ssh)
  ````
  git@github.com:jackelinepaula/ClassCode.git
  ````
2.Instale as dependências

   ```bash
   npm install
   ```

3.Altere o código fonte

No arquivo `banco.js`, descomente o seguinte trecho:
````
// db.sequelize.sync({force: true})
//     .then(() => {
//         console.log('\x1b[33m%s\x1b[0m', "[Sequelize] Tabelas Criadas com sucesso");
//})

````
Esse trecho é responsável por criar as tabelas no banco de dados.

Feito isso, siga para o próximo passo:

4.Inicie o projeto pela primeira vez

   ```bash
   node ./src/index.js
   ```

Você conseguirá acessar a aplicação na seguinte porta: 
````plaintext
localhost:8081
````

5.Insira os dados no banco

No passo anterior, ao rodar o projeto, ele criará todas as tabelas no banco, mas elas estarão vazias e isso pode acarretar erros na aplicação.

Para resolver isso:
- Execute manualmente os scripts de inserção de dados no banco de dados, todos eles se encontram no arquivo `ClassCode.sql`
- Dê um refresh nas telas.
   

