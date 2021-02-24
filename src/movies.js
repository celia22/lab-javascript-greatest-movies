// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (arr) => {
    let directors = [];
     directors = arr.map(x=> x.director)
     return directors
 };
  
console.log(getAllDirectors(movies));



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let howManyMovies = (arr) => {
    let drama = arr.filter(x => x.genre.includes("Drama"));
    let Steven = drama.filter(x => x.director === "Steven Spielberg");
    let sum = Steven.length;
    return sum
};

console.log(howManyMovies(movies));



// Iteration 3: All rates average - Get the average of all rates with 2 decimals. 

const ratesAverage = (arr) => {
    let rateTotal = arr.map(x => x.rate)
    let rateav = 0
    let ratesum = 0;

    // HACER REDUCE
    for(let i = 0; i < rateTotal.length; i++){  
        ratesum += rateTotal[i]
        rateav = ratesum / rateTotal.length
        //console.log(ratesum)
  };
    rateav = Math.round(rateav * 100) / 100
    return rateav
};

console.log(ratesAverage(movies));



// Iteration 4: Drama movies - Get the average of Drama Movies. 

const dramaMoviesRate = (arr) => {
    let drama = arr.filter(x => x.genre.includes("Drama"));
    let rateTotal = drama.map(x => x.rate)
    let rateav = 0
    let ratesum = 0;

    // HACER REDUCE

  for(let i = 0; i < rateTotal.length; i++){  
      ratesum += rateTotal[i]
      rateav = ratesum / rateTotal.length
      
  }; 
    rateav = Math.round(rateav * 100) / 100
    return rateav
};

console.log(dramaMoviesRate(movies));



// Iteration 5: Ordering by year - Order by year, ascending (in growing order).


const orderByYear = (arr) => {
    let moviesYear = arr.slice(0);
        moviesYear.sort(function(a,b) {
         return a.year - b.year; 
    })
    return moviesYear
   
};

console.log(orderByYear(movies));



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles. 
// ARREGLAR LA CACA ESTA

const orderAlphabetically = (arr) => {
    let byTitle = [];
    let twentyFirstMovies = []
        byTitle = arr.map (x => x.title)
        byTitle.sort(); 
        console.log(byTitle)
       if (byTitle.length <= 20){
           return byTitle
         } else if (byTitle.length > 20){
            for (let i = 0; i < 20; i++){
              twentyFirstMovies.push(byTitle[i]);
            };
        return twentyFirstMovies
  };       
};
 console.log(orderAlphabetically(movies));
 


/*
const orderAlphabetically = (arr) => {
    let byTitle = [];
        byTitle = arr.map (x => x.title)
         byTitle.sort();      
     return byTitle
  };
 console.log(orderAlphabetically(movies));
*/
 



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average




