'use strict';

function getMathResult(basa, icr) {
	let d = basa;
	return function() {
	  for (let i = 0; i < icr; i++) {
			d = d + '---' + (d + basa);
	  }
	  console.log(d);
	};
}

console.log(getMathResult(5, 3));