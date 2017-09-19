package main

import (
	"fmt"
	"parsy/stemmers"
)

func main() {
	s1 := parsy.Sentence{"this is a test sentence"}
	s2 := parsy.Sentence{"my name is akhil"}
	fmt.Println(parsy.TokenizeAndStem(s1))
	fmt.Println(s2.TokenizeAndStem())
}
