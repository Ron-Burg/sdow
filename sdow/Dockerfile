FROM python:2.7.16-alpine3.9
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
ENV FLASK_APP=server.py FLASK_DEBUG=1
EXPOSE 5000
CMD ["flask", "run", "--host=0.0.0.0"]