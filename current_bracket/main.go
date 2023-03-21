package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"example.com/api/app"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

type Member struct {
	name string
}

type Match struct {
	member1     Member
	member2     Member
	member1Wins uint
	member2Wins uint
}

func main() {
	var rounds float64

	fmt.Print("Type a number of rounds: ")
	fmt.Scan(&rounds)

	var rs int = int(rounds)
	var matches = make([]Match, 0)
	UNINITIALIZED_MEMBER := Member{name: "UNINITIALIZED"}
	UNINITIALIZED_MATCH := Match{member1: UNINITIALIZED_MEMBER, member2: UNINITIALIZED_MEMBER, member1Wins: 0, member2Wins: 0}

	for i := 0; i < rs; i++ {
		matches = append(matches, UNINITIALIZED_MATCH)
	}

	fmt.Println(len(matches))

	for i := 0; i < rs; i++ {
		fmt.Println(matches[i].member1.name + " " + matches[i].member2.name + "asd")
	}

	r := mux.NewRouter()

	r.HandleFunc("/", sendMatches(matches))
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

		jsonBytes, err := json.Marshal(m)
		if err != nil {
			fmt.Print(err)
		}

		w.Header().Set("Content-Type", "application/json")
		w.Write(jsonBytes)
		return
	}
}
