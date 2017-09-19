package parsy

import (
	"fmt"
	"strings"
)

type Sentence struct {
	Input string
}

// Tokenize and stem function as a method with receiver argument
func (s Sentence) TokenizeAndStem() []string {
	return strings.Split(s.Input, " ")
}

// Tokenize and stem function as a normal function with receiver argument
func TokenizeAndStem(s Sentence) []string {
	return strings.Split(s.Input, " ")
}

func Stem() {
	fmt.Println("this is the stemmer function")
}
