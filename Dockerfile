FROM denoland/deno:2.4.0

WORKDIR /app

# Install nginx
RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/*

# Copy deno files
COPY deno.json ./
COPY deno.lock ./

# Cache dependencies
RUN deno cache --reload deno.json

# Copy source files
COPY . .

# Copy entrypoint script (after COPY . . to ensure it's not overwritten)
COPY ./docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Configure nginx
RUN echo 'server { listen 80; root /app/dist; index index.html; location / { try_files $uri $uri/ /index.html; } }' > /etc/nginx/sites-available/default

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]