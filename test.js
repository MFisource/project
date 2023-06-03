'use strict';


// for (let i = 5; i <= 10; i++) {
// 	console.log(i);
// }

// for (let i = 20; i > 10; i--) {
// 	console.log(i);
// 	if (i === 13) {
// 		break;
// 	}
// }

// let i =  5;
// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }

// for (let i = 2; i <=10; i++) {
//     console.log(i);
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;

// while (i <= 16) {
// 	i++;
// 	if (i % 2 === 0) {
// 		continue; 
// 	} else {
// 		console.log(i);
// 	}
	
// }

// let arr = [];

// arr[0] = 5;

// while (arr <= 10) {
// 	console.log(arr);
// 	arr++;
// }

// for (let i = 2; i <=10; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	} else {
// 		continue;
// 	}
// }
// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }
// let i = 2;

// while (i < 16) {
// 	i++;
// 	if (i % 2 === 0) {
// 		continue; 
// 	} else {
// 		console.log(i);
// 	}
// }

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;

// const arrayOfNumbers = [];

// for (let i = 5; i <=10; i++) {

// 	arrayOfNumbers[i - 5] = i;
// } console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
// 	result[i] = arr[i];
// }

// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
// 	if (typeof(data[i]) === 'number') {
// 		data[i] *= 2;
// 	} else {
// 		data[i] += ' - done';
// 	}
// } 

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// let result = [];

// for (let i = 0; i < data.length; i++) {
//     result[i] = data[data.length - 1 - i]; 
// } 

// console.log(result);

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
    
    
//     // Не трогаем
//     return data.reverse();
// } 
// console.log(thirdTask());

const lines = 5;
let result = '';

for (let i = 0; i < lines; i++) {
    
	for (let j = 0; j < lines - i; j++ ) {
		result += ' ';
        
	}
	
	for (let j = 0;  j < 2 * i + 1 ; j++) {
		result += '*';
	}
	result += '\n';
} console.log(result);

for (let i = 0; i <= lines; i++) {
	for (let j = 0; j < lines - i; j++) {
		result += ' ';
	}
	for (let j = 0; j < 2 * i + 1; j++) {
		result += '*';
	}
	result += '\n';
}

console.log(result);