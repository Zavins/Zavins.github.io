FROM node:20-alpine AS builder
WORKDIR /code/

# The NPM Packages
COPY lib/ lib/
COPY package.json pnpm-lock.yaml /code/
RUN npm install -g pnpm
RUN pnpm install --production

# The actual code
COPY public/ public/
COPY src/ src/
COPY index.html tsconfig.json tsconfig.node.json vite.config.ts /code/
RUN pnpm build

# Serving with nginx
FROM fholzer/nginx-brotli:v1.26.2
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /code/dist /usr/share/nginx/html
RUN chown 1011:1011 -R /usr/share/nginx/html/
RUN chmod a+r -R /usr/share/nginx/html/
RUN chown 1011:1011 -R /var/cache/nginx
RUN chown 1011:1011 -R /etc/nginx