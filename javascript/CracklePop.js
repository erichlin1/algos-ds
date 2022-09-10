/*

Write a program that prints out the numbers 1 to 100 (inclusive). If the number is divisible by 3, print Crackle instead of the number. If it's divisible by 5, print Pop. If it's divisible by both 3 and 5, print CracklePop. You can use any language.

*/

let isDivisibleByThree = function(num) {
		if (num % 3 == 0) {
				return true;
		};
		return false;
};

let isDivisibleByFive = function(num) {
		if (num % 5 == 0) {
				return true;
		};
		return false;
};

let CracklePop = function(start, stop) {
		for (let i = start ; i <= stop ; i++ ) {
				if (isDivisibleByThree(i) && isDivisibleByFive(i)) {
						console.log('CracklePop');
				} else if (isDivisbleByThree(i)) {
						console.log('Crackle');
				} else if (isDivisibleByFive(i)) {
						console.log('Pop');
				};
		};
};

CracklePop(1, 100)

