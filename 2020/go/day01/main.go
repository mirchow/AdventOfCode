package main

import (
	"fmt"
	"sort"
	"time"
)

func main() {
	start := time.Now().UnixNano()
	sort.Ints(inputValues)

	var found2 = false
	var found3 = false
	for _, i := range inputValues {
		if found2 != true && found3 != true {
			for _, j := range inputValues {
				var x = i + j
				if x == 2020 {
					fmt.Printf("i: %d, j: %d, combined: %d\n", i, j, i*j)
					found2 = true
				} else if x > 2020 {
					continue
				}
				if found3 != true {
					for _, k := range inputValues {
						var x = i + j + k
						if x == 2020 {
							fmt.Printf("i: %d, j: %d, k: %d, combined: %d\n", i, j, k, i*j*k)
							found3 = true
						} else if x > 2020 {
							continue
						}
					}
				}
			}
		}
		if found2 == true && found3 == true {
			break
		}
	}

	finish := time.Now().UnixNano()
	fmt.Printf("program finished in %d ns\n", finish-start)
}
