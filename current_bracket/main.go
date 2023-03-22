package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Team struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

type Matchup struct {
	ID           int `json:"id"`
	Team1ID      int `json:"team1_id"`
	Team2ID      int `json:"team2_id"`
	WinnerTeamID int `json:"winner_team_id"`
}

type Bracket struct {
	Teams    []*Team    `json:"teams"`
	Matchups []*Matchup `json:"matchups"`
}

var bracket *Bracket

func createBracket(w http.ResponseWriter, r *http.Request) {
	teams := []*Team{
		{ID: 1, Name: "Team 1"},
		{ID: 2, Name: "Team 2"},
		{ID: 3, Name: "Team 3"},
		{ID: 4, Name: "Team 4"},
		{ID: 5, Name: "Team 5"},
		{ID: 6, Name: "Team 6"},
		{ID: 7, Name: "Team 7"},
		{ID: 8, Name: "Team 8"},
	}

	matchups := []*Matchup{
		{ID: 1, Team1ID: 1, Team2ID: 8},
		{ID: 2, Team1ID: 4, Team2ID: 5},
		{ID: 3, Team1ID: 2, Team2ID: 7},
		{ID: 4, Team1ID: 3, Team2ID: 6},
		{ID: 5, Team1ID: 1, Team2ID: 4},
		{ID: 6, Team1ID: 2, Team2ID: 3},
		{ID: 7, Team1ID: 8, Team2ID: 5},
		{ID: 8, Team1ID: 7, Team2ID: 6},
	}

	bracket = &Bracket{
		Teams:    teams,
		Matchups: matchups,
	}

	json.NewEncoder(w).Encode(bracket)
}

func updateMatchup(w http.ResponseWriter, r *http.Request) {
	var matchup Matchup
	err := json.NewDecoder(r.Body).Decode(&matchup)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	for i := range bracket.Matchups {
		if bracket.Matchups[i].ID == matchup.ID {
			bracket.Matchups[i].WinnerTeamID = matchup.WinnerTeamID
			break
		}
	}

	json.NewEncoder(w).Encode(matchup)
}

func main() {
	http.HandleFunc("/api/bracket", createBracket)
	http.HandleFunc("/api/matchup", updateMatchup)

	fmt.Println("Listening on port 8080...")
	http.ListenAndServe(":8080", nil)
}
