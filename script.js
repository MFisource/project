'use strict';
 

const numberOfFilms = prompt('how much do you watch films?', '');
    
const personalMovieDB = {
	count: numberOfFilms,
    
	movies: {},
    
	actors: {},

	genres: [],

	privat: false
}; 


	
for (let i = 0; i < 2; i++) {
	

	const a = prompt ('what last film do you watch?', ''),
		b = +prompt ('what score do you give?', '');

	if ( a != null && b != null && a.length < 50 && a != '' && b != '' ) {
		personalMovieDB.movies [a] = b;
	} else {
		i--;
	}

}

if (personalMovieDB.count < 10) {
	alert ('few movies have been viewed');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
	alert ('you are a movie fan');
} else if (personalMovieDB.count > 30) {
	alert ('you are super fan');
} else {
	alert ('error');
}
	



		
console.log(personalMovieDB);
