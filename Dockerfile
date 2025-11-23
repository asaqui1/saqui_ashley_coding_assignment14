# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /saqui_ashley_final_site

# Copy package files
COPY package*.json ./

# Install dependencies with legacy peer deps flag (needed for your project)
RUN npm install --legacy-peer-deps

# Copy all source files
COPY . .

# Build the production version
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Set working directory
WORKDIR /saqui_ashley_final_site

# Copy built files from build stage to nginx html directory
COPY --from=build /saqui_ashley_final_site/build /usr/share/nginx/html

# Copy custom nginx config to serve on port 5575
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 5575
EXPOSE 5575

# Start nginx
CMD ["nginx", "-g", "daemon off;"]