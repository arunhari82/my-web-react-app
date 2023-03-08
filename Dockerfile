FROM nginxinc/nginx-unprivileged

#### copy nginx conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]