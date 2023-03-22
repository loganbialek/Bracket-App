package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"utils"

	"example.com/api/app"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

type Match struct {
	Member1     string `json:"Member1"`
	Member2     string `json:"Member2"`
	Member1Wins int    `json:"Member1Wins"`
	Member2Wins int    `json:"Member2Wins"`
}

func main() {
	var rounds float64

	fmt.Print("Type a number of rounds: ")
	fmt.Scan(&rounds)

	var rs int = int(rounds)
	var matches = make([]Match, 0)
	UNINITIALIZED_MATCH := Match{Member1: "UNINITIALIZED", Member2: "UNINITIALIZED", Member1Wins: 0, Member2Wins: 0}

	for i := 0; i < rs; i++ {
		matches = append(matches, UNINITIALIZED_MATCH)
	}

	fmt.Println(len(matches))

	for i := 0; i < rs; i++ {
		fmt.Println(matches[i].Member1 + " " + matches[i].Member2 + "asd")
	}

	r := mux.NewRouter()

	rs = 8
	r.HandleFunc("/hello-world", helloWorld(rs))
	r.HandleFunc("/sendMatches", sendMatches(matches))
	//r.HandleFunc("/create-account", createAccount)
	//r.HandleFunc("/delete-account", deleteAccount)

	// Solves Cross Origin Access Issue
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:4200"},
	})
	handler := c.Handler(r)

	srv := &http.Server{
		Handler: handler,
		Addr:    ":" + os.Getenv("PORT"),
	}
	//fmt.Print(srv.Addr)
	log.Fatal(srv.ListenAndServe())

	fmt.Println("Hello!")
	app := &app.App{}
	app.Initialize()
	app.Run(":3000")
}

func sendMatches(m []Match) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		/*
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(m)
			return
		*/

		jsonBytes, err := utils.StructToJSON(m)
		if err != nil {
			fmt.Print(err)
		}

		w.Header().Set("Content-Type", "application/json")
		w.Write(jsonBytes)
		return
	}

}

func helloWorld(rs int) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		/*
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(m)
			return
		*/
		var data = struct {
			Rounds string `json:"rounds"`
		}{
			Rounds: string(rs),
		}

		jsonBytes, err := utils.StructToJSON(data)
		if err != nil {
			fmt.Print(err)
		}

		w.Header().Set("Content-Type", "application/json")
		w.Write(jsonBytes)
		return
	}

}
