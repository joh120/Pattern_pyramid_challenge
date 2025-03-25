/* 

Complex Pattern Printing

Challenge:

Write a function that prints a pyramid pattern of numbers based on n rows.

1. Odd rows should contain only odd numbers.
2. Even rows should contain only even numbers.

Example Output for n = 5

*/

function pattern_pyramid(n){
    // This function generates a pyramid pattern of numbers based on the specified number of rows 
    let arr = [] // Creates an empty array to store the pattern 
    for (let i = 1; i <= n; i++)
        // Loops through the rows of the pattern 
        {
        let row = [] // Creates an empty array for each row 
        for (let j = 1; j <= i; j++) // This ensures that the numbers in each row are based on the row number. 
            // Loops through the numbers in each row
        {
            if (i % 2 === 0){
                row.push(j * 2) // Adds even numbers to the row 
            } else {
                row.push(j * 2 - 1) // Adds odd numbers to the row 
            }
        }
        // j resets to 1 after each row is completed 
 
        arr.push(row) // Adds the row to the pattern array
    }
    return arr  // Returns the completed pattern array
}

console.log(pattern_pyramid(5)) 

/*
prints ->
[1] 
[2, 4]
[1, 3, 5] 
[2, 4, 6, 8]
[1, 3, 5, 7, 9]
*/

// End of pattern pyramid challenge