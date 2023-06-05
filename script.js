'use strict';
 

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('how much do you watch films?', '');

	while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('how much do you watch films?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
    
	movies: {},
    
	actors: {},

	genres: [],

	privat: false
}; 


	


function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
	

		const a = prompt ('what last film do you watch?', ''),
			b = +prompt ('what score do you give?', '');
	
		if ( a != null && b != null && a.length < 50 && a != '' && b != '' ) {
			personalMovieDB.movies [a] = b;
		} else {
			i--;
		}
	}
}

rememberMyFilms();


	
function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert ('few movies have been viewed');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
		alert ('you are a movie fan');
	} else if (personalMovieDB.count > 30) {
		alert ('you are super fan');
	} else {
		alert ('error');
	}
}

detectPersonalLevel();

function showMyDB(hudden) {
	if (!hudden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		
		let a = prompt (`what is your favorite genre? ${i}`);

		if (a !== null && a != '') {
			personalMovieDB.genres [i - 1] = a;
		} else {
			a = prompt (`what is your favorite genre? ${i}`);
			i--;
		}
	} 
}

writeYourGenres();
		

