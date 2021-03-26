package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/", handler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "3002"
	}
	fmt.Println("Server listening on port 3002")
	log.Panic(
		http.ListenAndServe(":"+port, nil),
	)
}

func handler(w http.ResponseWriter, r *http.Request) {
	_, err := fmt.Fprintf(w, "hello world")
	if err != nil {
		log.Panic(err)
	}
}
