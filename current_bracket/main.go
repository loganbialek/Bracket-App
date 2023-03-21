package main

import (
	"fmt"

	"example.com/api/app"
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

	var r int = int(rounds)
	var matches = make([]Match, 0)
	UNINITIALIZED_MEMBER := Member{name: "UNINITIALIZED"}
	UNINITIALIZED_MATCH := Match{member1: UNINITIALIZED_MEMBER, member2: UNINITIALIZED_MEMBER, member1Wins: 0, member2Wins: 0}

	for i := 0; i < r; i++ {
		matches = append(matches, UNINITIALIZED_MATCH)
	}

	fmt.Println(len(matches))

	for i := 0; i < r; i++ {
		fmt.Println(matches[i].member1.name + " " + matches[i].member2.name + "asd")
	}

	fmt.Println("Hello!")
	app := &app.App{}
	app.Initialize()
	app.Run(":3000")
}
