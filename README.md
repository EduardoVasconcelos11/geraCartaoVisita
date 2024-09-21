
# Gerador de Cartão de Visita

Este projeto é uma aplicação web que permite criar cartões de visita personalizados.

## Funcionalidades

- Gerar cartões de visita com nome, profissão e informações de contato.
- Personalização de design e layout.
- Armazenamento de dados em um banco de dados PostgreSQL.

## Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** Node.js com Express
- **Banco de Dados:** PostgreSQL
- **Containerização:** Docker

## Como Executar o Projeto

### Pré-requisitos

- Docker
- Docker Compose

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/EduardoVasconcelos11/geraCartaoVisita.git
```

2. Entre no diretório do projeto:

```bash
cd geraCartaoVisita
```

3. Inicie o ambiente com Docker Compose:

```bash
docker-compose up
```

Isso iniciará os serviços do frontend, backend e banco de dados.

4. Acesse o projeto no navegador:

```
http://localhost:3000
```

## Variáveis de Ambiente

Configure as variáveis de ambiente no arquivo `.env`:

- `POSTGRES_USER`
- `POSTGRES_PASSWORD`
- `POSTGRES_DB`
- `DATABASE_URL`

## Contribuindo

Contribuições são bem-vindas! Siga os passos para contribuir:

1. Faça um **fork** do projeto.
2. Crie uma nova **branch** para suas alterações.
3. Envie um **pull request**.

## Licença

Este projeto está sob a licença MIT.
