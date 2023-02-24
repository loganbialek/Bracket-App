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

type singleBracketEvent struct {
	matches   []Match
	standings []Member
}

func main() {
	fmt.Println("Hello!")
	app := &app.App{}
	app.Initialize()
	app.Run(":3000")
}
