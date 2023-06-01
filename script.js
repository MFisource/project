'use strict';
 

const numberOfFilms = +prompt('how much do you watch films?', '');
    
const personalMovieDB = {
	count: numberOfFilms,
    
	movies: {},
    
	actors: {},

	genres: [],

	privat: false
}; 

const a = prompt ('what last film do you watch?', ''),
	b = +prompt ('what score do you give?', ''),
	c = prompt ('what last film do you watch?', ''),
	d = +prompt ('what score do you give?', '');

personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log(personalMovieDB);
