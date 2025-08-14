# Stage 1: Build the React app
FROM node:18 AS build
WORKDIR /app

# Copy only package.json and package-lock.json first for caching
COPY package*.json ./
RUN npm install

# Now copy the rest of the files
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve it with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



