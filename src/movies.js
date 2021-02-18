// Iteration 1: All directors? - Get the array of all directors.

const getDirectors = movies.map(x => {
    let directors = x.director
    return directors
 });
 
 console.log(getDirectors)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let howManyDramaMoviesStevenDirected = () => {
  let drama = movies.filter(x => x.genre.includes("Drama"));

  let Steven = drama.filter(x => x.director === "Steven Spielberg");
//console.log(Steven);

  let sum = Steven.length;
//console.log(sum)

return sum

}

console.log(howManyDramaMoviesStevenDirected())

// Iteration 3: All rates average - Get the average of all rates with 2 decimals. map + average

// Iteration 4: Drama movies - Get the average of Drama Movies. map + filter + average

// Iteration 5: Ordering by year - Order by year, ascending (in growing order).  sort(a-b)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles. sort o lo que has usado para el 1r lab
//  para ordenar el driver y el copilot

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

/*Iteration 1: All directors
We need to get the array of all directors. Since this is a warm up, we will give you a hint:
 you have to map through the array of movies and get all the directors into one array as a final
  result. Go ahead and create a function named getAllDirectors() that receives an array of movies 
  as an argument and returns a new (mapped array).*/




let getAllDirectors = () => movies.director.map(x => x)

console.log(getAllDirectors)