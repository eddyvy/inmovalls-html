FROM golang:1.21

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY *.go ./
COPY html ./html
COPY static ./static

RUN CGO_ENABLED=0 GOOS=linux go build -o /docker-gs-ping

EXPOSE 80

CMD ["/docker-gs-ping"]