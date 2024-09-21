# Usar a imagem oficial do Node.js
FROM node:18-alpine

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar o arquivo package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências do backend
RUN npm install

# Copiar o knexfile.js
COPY knexfile.js ./

# Copiar o diretório de migrations (caso ele já tenha migrations)
COPY migrations ./migrations

# Copiar o restante do código do backend
COPY . .

# Expor a porta que o servidor do backend vai rodar
EXPOSE 5000

# Comando para rodar as migrations e iniciar o servidor
CMD ["sh", "-c", "npx knex migrate:latest && npm start"]
