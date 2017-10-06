/* This Source Code Form is subject to the terms of the MIT
 * License. If a copy of the same was not distributed with this
 * file, You can obtain one at https://github.com/akhilpandey95/parsy/blob/master/LICENSE.*/

package main

import (
	"fmt"
	"strings"
)

type Sentence struct {
	Input string
}

// Various Information retrieval methods
func (s Sentence) boolean_retrieval() []string {
	return s.Input
}
