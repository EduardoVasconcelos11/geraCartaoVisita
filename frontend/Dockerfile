# Usar a imagem oficial do Node.js
FROM node:18-alpine

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar o arquivo package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências do frontend
RUN npm install

# Copiar o restante do código do frontend
COPY . .

# Expor a porta que o frontend vai rodar
EXPOSE 3000

# Comando para rodar o servidor de desenvolvimento do React no IP 0.0.0.0
CMD ["npm", "start", "--", "--host", "0.0.0.0"]