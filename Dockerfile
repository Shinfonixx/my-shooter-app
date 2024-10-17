# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos del proyecto
COPY package*.json ./
COPY . .

# Instala las dependencias de Node.js
RUN npm install

# Expone el puerto 3000 del contenedor
EXPOSE 8080

# Comando para iniciar la aplicación
CMD ["node", "server.js"]