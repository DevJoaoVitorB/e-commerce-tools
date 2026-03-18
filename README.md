# 🧰 E-commerce Toolkit - Ferramentas para Terminal

Este projeto consiste em um **conjunto de ferramentas para e-commerce executadas diretamente no terminal**, desenvolvido com **JavaScript e Node.js**.

A aplicação oferece funcionalidades úteis para o dia a dia, como:

- 🔳 geração de QR Code
- 🔐 geração de senhas seguras

Tudo isso sendo executado via **linha de comando**, com interação direta com o usuário.

Este projeto foi desenvolvido como **desafio prático** do curso:

> **Formação Node.js Fundamentals – Módulo III: Gerenciando Pacotes com NPM**  
> Plataforma: [**DIO.me**](https://web.dio.me/)

<br>

## 🚀 Tecnologias Utilizadas

![Stack](https://skillicons.dev/icons?i=nodejs,js)

Além do Node.js, o projeto utiliza bibliotecas importantes do ecossistema NPM:

- `qrcode-terminal` → geração de QR Codes no terminal
- `chalk` → estilização de textos no terminal
- `prompt` → entrada de dados do usuário

<br>

## 🎯 Objetivo do Projeto

O objetivo principal é construir ferramentas reutilizáveis para aplicações de e-commerce, explorando o uso de **pacotes NPM** e interação via terminal.

O sistema permite:

- 🔳 gerar QR Codes a partir de textos ou links
- 🔐 gerar senhas seguras com diferentes combinações de caracteres
- 🎨 exibir informações estilizadas no terminal
- ⌨️ interagir com o usuário por meio de prompts

Além disso, o projeto reforça a prática de:

- instalação e gerenciamento de dependências com **NPM**
- organização de código em módulos
- criação de ferramentas utilitárias reutilizáveis

<br>

## 🧱 Estrutura das Funcionalidades

A aplicação foi dividida em funcionalidades independentes, facilitando manutenção e expansão.

### Gerador de QR Code

Responsável por gerar QR Codes diretamente no terminal.

**Características:**

- recebe um texto ou URL como entrada
- gera o QR Code em formato visual no terminal
- utiliza a biblioteca `qrcode-terminal`

<br>

### Gerador de Senha

Responsável por criar senhas seguras de forma automatizada.

**Características:**

- geração de senhas aleatórias
- uso de letras maiúsculas, minúsculas, números e caracteres especiais
- lógica implementada manualmente (sem dependências externas)

<br>

### Interface de Terminal

Responsável pela interação com o usuário.

**Características:**

- leitura de entradas com `prompt`
- estilização das mensagens com `chalk`
- exibição de menus e opções no terminal

<br>

## 📚 Conceitos Praticados

Durante o desenvolvimento deste projeto foram aplicados conceitos importantes como:

- gerenciamento de pacotes com **NPM**
- utilização de bibliotecas externas
- modularização de código
- separação de responsabilidades
- manipulação de strings
- geração de dados aleatórios
- interação com usuário via terminal (CLI)
- boas práticas na organização de projetos Node.js

<br>

## 🖥️ Execução do Projeto

Para executar o projeto localmente:

```bash
# clonar o repositório
git clone https://github.com/DevJoaoVitorB/e-commerce-tools.git

# instalar dependências
npm install

# executar aplicação
npm run start:dev
```

Para configurar a geração de senhas, crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=8
```
