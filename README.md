# User Registration Application

Esta é uma aplicação simples de cadastro de usuário, desenvolvida em React, que inclui telas de **Login** e **Registro**. A aplicação é integrada com um backend Node.js e requer a configuração de uma variável de ambiente para definir a URL do backend.

## Funcionalidades

- **Registro de Usuário:** Permite que novos usuários se registrem com nome, email e senha.
- **Login de Usuário:** Usuários podem fazer login com suas credenciais.

## Pré-requisitos

Antes de rodar a aplicação, certifique-se de ter o seguinte instalado em seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org/) (versão recomendada: 14.x ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

Siga os passos abaixo para rodar a aplicação localmente:

### 1. Clonar o repositório


git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

### 2. Instalar dependências

Utilizando npm: npm install
Utilizando yarn: yarn install

### 3. Configurar variáveis de ambiente
Crie um arquivo .env na raiz do projeto e adicione a seguinte variável de ambiente:
REACT_APP_BACKEND_URL=http://localhost:3001
Essa variável define a URL do backend para onde as requisições de login e registro serão enviadas.

### 4. Rodar a aplicação
Após a configuração do ambiente, inicie o servidor de desenvolvimento:
npm start
Ou, se estiver usando yarn:
yarn start

A aplicação estará disponível em http://localhost:3000.

### Estrutura do projeto

- **src/components:** Componentes reutilizáveis da aplicação.
- **src/pages:** Telas de Login e Registro.
- **src/services:** Configuração do serviço axios para integração com o backend.

### Backend

Esta aplicação está configurada para se comunicar com um backend Node.js que deve rodar na porta 3001. O backend é responsável por gerenciar o cadastro e a autenticação de usuários. Certifique-se de que o backend está rodando corretamente antes de utilizar a aplicação.

### Variáveis de ambiente

- **REACT_APP_BACKEND_URL**: URL base do backend (exemplo: http://localhost:3001)

### Tecnologias utilizadas

- [React](https://react.dev/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/en/main)


