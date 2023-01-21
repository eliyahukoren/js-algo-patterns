const power = (base, exponent) => {
	if( exponent === 0) return 1;
	return base * power(base, exponent - 1);
}

const factorial = (num) => {
	if( num === 0) return 1;

	return num * factorial(num - 1);
}

const productOfArray = (arr) => {
	if (arr.length === 0) return 1;

	return arr[0] * productOfArray(arr.slice(1));
}

const recursiveRange = (num) => {
	if( num === 0) return 0;

	return num + recursiveRange(num - 1);
}

const countDown = (n) => {
	if (n <= 0 ){
		console.log('All done');
		return;
	}

	console.log(n);
	n--;

	countDown(n);
}

const fib = (num, memo={}) => {
	if( num in memo ) return memo[num];
	if( num <= 2) return 1;

	memo[num - 1] = fib(num - 1, memo);
	memo[num - 2] = fib(num - 2, memo);
	return memo[num - 1] + memo[num - 2];
}

const fibA = (pos) => {
	if (pos === 1 || pos === 2) return 1;

	let min = 1;
	let max = 1;
	let value = 0;

	// start position on fib
	let cursor = 2;

	while(true){
		cursor ++;
		value = min + max;

		if( cursor === pos) return value;

		min = Math.max(max, min);
		max = Math.max(max, value);
	}
}

/*
	Write a recursive function called reverse which accepts a string 
		and returns a new string in reverse.
*/
const reverse = (word) => {
	if( word.length <= 1) return word

	return reverse(word.slice(1)) + word[0];
}

const flatten = (nums) => {
	let res = [];

	for(let item of nums){
		if( Array.isArray(item) ){
			res = res.concat(flatten(item))
		}else{
			res.push(item);
		}
	}

	return res;
}

/*
	someRecursive
	Write a recursive function called someRecursive which accepts an array and a callback. 
	The function returns true if a single value in the array returns true when passed to the callback. 
	Otherwise it returns false.
*/

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const someRecursive = (array, callback) => {
	if( array.length === 0 ) return false;
	if( callback(array[0]) === true ) return true;

	return someRecursive(array.slice(1), callback);
}

module.exports = {
	power,
	factorial,
	productOfArray,
	recursiveRange,
	fib,
	fibA,
	reverse,
	flatten,
	someRecursive
};


