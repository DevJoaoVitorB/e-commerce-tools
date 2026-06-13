# 🚀 E-commerce Toolkit - Ferramentas para Terminal

Aplicação desenvolvida com **JavaScript e Node.js** que reúne ferramentas úteis para ambientes de e-commerce executadas diretamente via terminal. O projeto foi desenvolvido como desafio prático do **Módulo III: Gerenciando Pacotes com NPM do curso de Formação Node.js Fundamentals** da [**DIO.me**](https://www.dio.me/).

### Status do Projeto: ✅ Concluído

<br>

## 📋 Sobre o Projeto

O **E-commerce Toolkit** é uma aplicação **CLI (Command Line Interface)** criada para fornecer ferramentas reutilizáveis frequentemente utilizadas em sistemas de e-commerce. O projeto oferece geração de QR Codes e criação de senhas seguras, utilizando bibliotecas do ecossistema **NPM** e interação por linha de comando.

### Objetivo

Explorar o gerenciamento de dependências com **NPM** e a utilização de bibliotecas externas para construir ferramentas úteis executadas diretamente pelo terminal. Durante o desenvolvimento foram praticados:

* Gerenciamento de pacotes com NPM
* Utilização de bibliotecas externas
* Modularização de código
* Separação de responsabilidades
* Manipulação de strings
* Geração de dados aleatórios
* Desenvolvimento de aplicações CLI
* Configuração via variáveis de ambiente
* Organização de projetos Node.js

### Problema Resolvido

Diversas aplicações precisam gerar QR Codes ou criar senhas seguras para usuários e administradores. Este projeto demonstra como implementar essas funcionalidades de forma modular, reutilizável e acessível através de uma interface de linha de comando.

<br>

## ✨ Funcionalidades

### Funcionalidades Implementadas

* [x] Geração de QR Codes via terminal
* [x] Geração de senhas seguras
* [x] Configuração da senha através de variáveis de ambiente
* [x] Interface interativa via terminal
* [x] Estilização das mensagens utilizando cores
* [x] Modularização do código
* [x] Utilização de bibliotecas externas do NPM

#### 🔳 Gerador de QR Code

Ferramenta responsável pela geração de QR Codes diretamente no terminal.

Características:

* Recebe textos ou URLs como entrada
* Gera QR Code visual no terminal
* Utiliza a biblioteca `qrcode-terminal`

#### 🔐 Gerador de Senhas

Ferramenta responsável pela criação automática de senhas seguras.

Características:

* Senhas aleatórias
* Letras maiúsculas e minúsculas
* Números
* Caracteres especiais
* Tamanho configurável

#### ⌨️ Interface CLI

Responsável pela interação com o usuário.

Características:

* Menus interativos
* Entrada de dados via terminal
* Mensagens coloridas e formatadas
* Navegação simples e intuitiva

<br>

## 🛠️ Tecnologias Utilizadas

### Back-end

![Stack Backend](https://skillicons.dev/icons?i=nodejs,javascript)

### Ferramentas

![Tools](https://skillicons.dev/icons?i=vscode,git,github,npm)

### Bibliotecas

* `qrcode-terminal`
* `chalk`
* `prompt`

<br>

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura modular baseada em responsabilidades, onde cada funcionalidade possui seu próprio módulo.

Características principais:

* Separação de responsabilidades
* Modularização com ES Modules
* Organização por funcionalidades
* Interface CLI interativa
* Configuração por variáveis de ambiente

<br>

## 📂 Estrutura de Diretórios

```text
e-commerce-toolkit/
│
├── src/                           # Código-fonte principal da aplicação
│   │
│   ├── prompts/                   # Configurações e entradas do usuário
│   │
│   ├── services/                  # Regras de negócio
│   │   ├── qr-code/               # Serviço de geração de QR Codes
│   │   └── password/              # Serviço de geração de senhas
│   │
│   ├── utils/                     # Funções auxiliares
│   │
│   └── index.js                   # Ponto de entrada da aplicação
│
├── .env-example                   # Exemplo de configuração das variáveis de ambiente
├── package.json                   # Dependências e scripts
├── package-lock.json              # Controle de dependências
├── .gitignore                     # Evitar versionamento de informações específicas do projeto
└── README.md
```

<br>

## ⚙️ Pré-requisitos

Antes de iniciar, você precisará ter instalado:

* [Git (recomendado)](https://git-scm.com/install//windows)
* [Visual Studio Code (recomendado)](https://code.visualstudio.com/)
* [Node.js (versão 18 ou superior) + NPM](https://nodejs.org/pt-br)

<br>

## 🚀 Como Executar

### 1. Clonar o Repositório

```bash
git clone https://github.com/DevJoaoVitorB/e-commerce-tools.git
```

### 2. Entrar na Pasta

```bash
cd e-commerce-tools
```

### 3. Instalar Dependências

```bash
npm install
```

### 4. Configurar Variáveis de Ambiente

Crie o arquivo `.env` a partir do modelo disponível:

```bash
cp .env.example .env
```

No Windows:

```powershell
copy .env.example .env
```

ou

```powershell
Copy-Item .env.example .env
```

Configure suas credenciais:

```env
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=8
```

### 5. Executar o Projeto

```bash
npm run start:dev
```

<br>

## 👨‍💻 Autor

| **DevJoaoVitorB** |
| ----------------- |
| ![Foto de Perfil - DevJoaoVitorB](https://avatars.githubusercontent.com/u/182047578?s=100&v=4) |
| [![GitHub](https://skillicons.dev/icons?i=github)](https://github.com/DevJoaoVitorB) [![Linkedin](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/devjoaovitorb) |
