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
/*
     return movies.filter((movies)=> {
      return movies.director === "steven " && movie.genre.includes("Drama")
      return SpilbergDrama */ //MUCHO MAS SIMPLE QUE LO QUE HE HECHO
    
    return sum
};

//console.log(howManyMovies(movies));



// Iteration 3: All rates average - Get the average of all rates with 2 decimals. 

const ratesAverage = (arr) => {

       if (arr.length === 0) {
          return 0;
        }
      
      const rates = arr.map(x => x.rate)     
     
      let totalRate = rates.reduce(function (acc, num) {
          if (num) { // esto es para que cuente cualquier elemento que se le pase
            //aunque no pueda sumarse al total, pero que cuente para el average
            // si es un numero(num), añade num y acumulador.
            return acc + num;
          } else {
            return acc; // si no es un numero, añades acumulador
          }
        }, 0);
      
        return Math.round((totalRate / arr.length) * 100) / 100;
}
      
      //console.log(ratesAverage(movies));



// Iteration 4: Drama movies - Get the average of Drama Movies. 

const dramaMoviesRate = arr => {
  let dramaM= arr.filter(x => x.genre.includes("Drama"));

      if (dramaM.length === 0) {
         return 0;
      }
 
     const dramaMoviesRate = dramaM.map (x => x.rate)   

     let rateDrama = dramaMoviesRate.reduce(function (acc, num) {
        return acc + num;
      }, 0);

  return Math.round((rateDrama / dramaM.length) * 100) / 100;
}

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



