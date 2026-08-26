# API REST com Express
**API REST para gestão de alunos**

API RESTful desenvolvida para gerenciar uma lista de alunos em memória, permitindo cadastrar, consultar, atualizar e excluir registros por meio de endpoints HTTP.


# 1. Descrição

Esta API foi desenvolvida para controlar informações de alunos em um ambiente de estudo, com foco em operações básicas de CRUD. Ela é utilizada para demonstrar o funcionamento de uma API REST utilizando Node.js e Express, com respostas em JSON e rotas organizadas para cada operação.


# 2. Funcionalidades

- Cadastro de alunos;
- Listagem de todos os alunos;
- Consulta de aluno por ID;
- Atualização de dados do aluno;
- Exclusão de aluno por ID;


# 3. Tecnologias Utilizadas

- Node.js
- Express
- JavaScript
- Nodemon
- Docker Compose
- MySQL
- mysql2


# 4. Arquitetura e Organização do Projeto

```bash
api-rest/
│
├── node_modules/
├── src/
│   ├── database/
│   │   └── pool.js
│   ├── controllers/
│   │   └── AlunosController.js
│   ├── repositories/
│   │   └── AlunosRepository.js
│   ├── routes/
│   │   └── alunos.route.js
│   ├── app.js
│   └── server.js
│
├── .env
├── .env.example
├── .gitignore
├── docker-compose.yml
├── package.json
├── package-lock.json
└── README.md

```

Descrição resumida:

- `server.js` — inicializa o servidor da aplicação;
- `src/app.js` — contém todas as rotas e a lógica da API;
- `docker-compose.yml` — configura o ambiente MySQL local;
- `package.json` — define scripts e dependências do projeto.


# 5. Pré-requisitos

Antes de executar o projeto, verifique se você possui instalado:

- Node.js
- npm
- Git
- Docker e Docker Compose (opcional, para subir o MySQL)

# 6. Instalação

## 6.1 Clone o repositório

```bash
git clone <https://github.com/lara-peddinghausen/express_bd.git>
```

## 6.2 Acesse a pasta do projeto

```bash
cd express_bd
```

## 6.3 Instale as dependências

```bash
npm install
```

## 6.4 Configure as variáveis de ambiente:

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Configure os valores de ```DB_USER``` e ```DB_PASSWORD```.

# 7. Execução do Projeto

## Banco de dados com Docker

Para subir o MySQL localmente: (iniciar nosso banco)

```bash
docker compose up -d
```

## Executando a aplicação

Modo de desenvolvimento:

```bash
npm run dev
```

## Execução direta

```bash
node server.js
```

Após iniciar a aplicação, o servidor ficará disponível em:

```bash
http://localhost:3000
```


# 8. Endpoints da API

| Método | Endpoint | Descrição |
| --- | --- | --- |
| GET | `/` | Retorna uma mensagem inicial da API |
| GET | `/alunos` | Lista todos os alunos |
| GET | `/alunos/:id` | Busca um aluno pelo ID |
| POST | `/alunos` | Cadastra um novo aluno |
| PUT | `/alunos/:id` | Atualiza os dados de um aluno |
| DELETE | `/alunos/:id` | Remove um aluno pelo ID |


# 9. Exemplos de Requisição e Resposta

## Exemplo de requisição: cadastro de aluno

```http
POST /alunos
Content-Type: application/json
```

```json
{
  "id": 5,
  "nome": "Ana",
  "curso": "ADS"
}
```

## Exemplo de resposta

```json
{
  "message": "Aluno cadastrado com sucesso!"
}
```

## Exemplo de listagem

```http
GET /alunos
```

```json
[
  { "id": 1, "nome": "Bruno", "curso": "ADS" },
  { "id": 2, "nome": "Maria", "curso": "ADS" }
]
```


# 10. Modelo de Dados

A API trabalha com a entidade `Aluno`.

```bash
Aluno
├── id
├── nome
└── curso
```


### Estrutura da entidade

- `id`: identificador do aluno;
- `nome`: nome do aluno;
- `curso`: curso do aluno.


# 11. Extras — Programação Web 2

- API REST desenvolvida com Express e Node.js;
- Manipulação de dados em memória para estudo de CRUD;
- Estrutura simples para entendimento de rotas, requisições e respostas HTTP;
- Containerização opcional do MySQL com Docker Compose para ambiente de desenvolvimento.
- Para testes rápidos dos endpoints, é possível utilizar arquivos de requisições HTTP dentro do projeto, facilitando a execução de chamadas GET, POST, PUT e DELETE diretamente pelo editor.


# 12. Resposta - Exercício 10
Após compreender a diferença entre container e volume, execute:

```bash
docker compose down -v
```

Suba novamente:

```bash
docker compose up -d
```

Verifique o que aconteceu com:  
Tabela  
Dados  
Banco

Explique o resultado.

## Resposta:
A tabela e os dados foram apagados. O comando docker compose down -v remove os volumes que armazenam os dados. O banco também perde os dados que estavam guardados no volume, mas assim que o comando docker compose up -d é executado, o banco é recriado, porém como não existe mais o volume, ele não tem mais os dados que tinha antes.


# 13. Autor

**Nome:** Eliakim Oliveira  
**Turma:** ADS 2024.2 NOITE 
**Unidade Curricular:** Programação Web II


# 14. Licença e Uso Acadêmico

Projeto desenvolvido para fins acadêmicos e de aprendizado na disciplina de Programação Web 2.

O código poderá ser utilizado para avaliação e acompanhamento acadêmico durante o curso.
