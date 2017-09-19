package parsy

import (
	"strings"
)

type Sentence struct {
	Input string
}

// Tokenize and stem function as a method with receiver argument
func (s Sentence) Tokenize() []string {
	return strings.Split(s.Input, " ")
}

// Tokenize and stem function as a normal function with receiver argument
func Tokenize(s Sentence) []string {
	return strings.Split(s.Input, " ")
}
