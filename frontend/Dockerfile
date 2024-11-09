# Stage 1: Build the React app using Vite
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . ./

# Build the application
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine

# Copy the built files to the nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port on which the app will be running
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
