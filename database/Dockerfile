FROM python:2.7-alpine3.9
WORKDIR /app
VOLUME /app/dump
COPY . .
RUN apk add bash grep wget sqlite pigz
CMD ["./buildDatabase.sh", "20190420"]