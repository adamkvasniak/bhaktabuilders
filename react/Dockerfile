# Use Node.js for building the app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json separately for better caching
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Use a minimal Nginx image for serving the built app
FROM nginx:alpine

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration for handling React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built frontend files
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]