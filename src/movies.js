// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (arr) => {
    let directors = [];
     directors = arr.map(x=> x.director)
     return directors
 };
  
//console.log(getAllDirectors(movies));



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let howManyMovies = (arr) => {
    let drama = arr.filter(x => x.genre.includes("Drama"));
    let Steven = drama.filter(x => x.director === "Steven Spielberg");
    let sum = Steven.length;
    return sum
};

//console.log(howManyMovies(movies));



// Iteration 3: All rates average - Get the average of all rates with 2 decimals. 

const ratesAverage = (arr) => {

       if (arr.length === 0) {
          return 0;
        }
      
        const rates = arr.map(function (x) {
          return x.rate;
        });
      
        console.log(rates);
      
        let totalRate = rates.reduce(function (acc, el) {
          if (el) {
            return acc + el;
          } else {
            return acc;
          }
        }, 0);
      
        return Math.round((totalRate / arr.length) * 100) / 100;
}
      
      console.log(ratesAverage(movies));



// Iteration 4: Drama movies - Get the average of Drama Movies. 

const dramaMoviesRate = (arr) => {
    let drama = arr.filter(x => x.genre.includes("Drama"));
    let rateTotal = drama.map(x => x.rate)
    let rateav = 0
    let ratesum = 0;

  for(let i = 0; i < rateTotal.length; i++){  
      ratesum += rateTotal[i]
      rateav = ratesum / rateTotal.length
      
  }; 
    rateav = Math.round(rateav * 100) / 100
    return rateav
};

//console.log(dramaMoviesRate(movies));



// Iteration 5: Ordering by year - Order by year, ascending (in growing order).


const orderByYear = (arr) => {
    let moviesYear = arr.slice(0);
        moviesYear.sort(function(a,b) {
        return a.year - b.year || a.title.localeCompare(b.title)
      })
  return moviesYear
   
};

console.log(orderByYear(movies));



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles. 


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
//// console.log(orderAlphabetically(movies));




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average



