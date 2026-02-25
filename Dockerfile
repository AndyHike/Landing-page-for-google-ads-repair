FROM node:20-alpine

WORKDIR /app

# Копіюємо файли конфігурації
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь код
COPY . .

# Збираємо проєкт (Vite створить папку dist)
RUN npm run build

# Встановлюємо пакет serve для роздачі статичних файлів
RUN npm install -g serve

# Вказуємо порт, який буде слухати контейнер
EXPOSE 3000

# Запускаємо сервер (роздаємо папку dist на порту 3000)
CMD ["serve", "-s", "dist", "-l", "3000"]
