package main

import (
	"log"
	"net"

	pb "github.com/ewooral/grpc-go-project/proto"
	"google.golang.org/grpc"
)

const (
	port = ":8080"
)

type helloServer struct {
	pb.RegisterGreetServiceServer
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("Failed to start the server %v", err)
	}
	grpcServer := grpc.NewServer()
	bp.RegisterGreetServiceServer(grpcServer, &helloServer{})
	log.Printf("server started at %v", lis.Addr())
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("Failed to start: %v", err)
	}
}
