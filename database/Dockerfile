FROM python:2.7-slim
WORKDIR /app
VOLUME /app/dump
COPY . .
RUN apt-get update && apt-get install -y bash grep wget sqlite pigz
CMD ["./buildDatabase.sh", "20190420"]