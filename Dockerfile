# Backend stage
FROM node:18-alpine as backend

WORKDIR /app

# Install backend dependencies
COPY server/package*.json ./
RUN npm install

# Copy backend code
COPY server/ ./

# Expose backend port
EXPOSE 3000

# Command to start the backend
CMD ["npm", "start"]

# Frontend stage
FROM nginx:alpine as frontend

# Copy frontend files to the Nginx server
COPY app/ /usr/share/nginx/html

# Expose frontend port
EXPOSE 80
