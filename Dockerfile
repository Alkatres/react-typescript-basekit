# Multi-stage build
# Step1: 소스코드를 빌드
# Step2: 빌드한 리소스(번들)을 Nginx를 통해 배포

# TODO: ENV : 환경변수
# <Step1> --------------------
FROM node:12.16.1-alpine AS builder

WORKDIR /snaps/apps/aws-infra-visualize

COPY package.json .

RUN npm install

COPY . .

RUN npm run build:prod
# </Step1> --------------------

# <Step2> --------------------
FROM nginx:mainline-alpine

WORKDIR /snaps/apps/aws-infra-visualize

COPY --from=builder /snaps/apps/aws-infra-visualize/dist .

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 9000

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
# </Step2> --------------------




