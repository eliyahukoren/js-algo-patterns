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

/*
isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
*/

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

const isPalindrome = (word) => {
	if( word.length === 1 ) return true
	if( word.length === 2 ) return word[0] === word[1]

	if( word[0] === word.slice(-1)) return isPalindrome(word.slice(1,-1));

	return false;
}

const sumTo = (num) => {
	return	num === 1 ? 1 : num + sumTo(num - 1)
}

const toUpperCaseWord = str => {
	return str.charAt(0).toUpperCase().concat(str.slice(1));
}
/*
	capitalizeFirst
	Write a recursive function called capitalizeFirst. 
	Given an array of strings, capitalize the first letter of each string in the array.
*/
const capitalizeFirst = (array) => {
	const result = [toUpperCaseWord(array[0])];
	if( array.length === 1) return result;

	return result.concat(capitalizeFirst(array.slice(1)));
}

/*
	Write a recursive function called nestedEvenSum. 
	Return the sum of all even numbers in an object which may contain nested objects.
*/
const nestedEvenSum = (obj) => {
	let sum = 0;

	for( let key in obj ){
		switch(typeof obj[key]){
			case 'object':
				sum += nestedEvenSum(obj[key]);
				break;
			case 'number':	
				sum += obj[key] % 2 === 0 ? obj[key] : 0;
				break;
		}		
	}

	return sum;
}

const capitalizeWords = (array) => {
	if( array.length === 0) return array;
	if (array.length === 1) return [array[0].toUpperCase()];

	let upperCaseString = [array[0].toUpperCase()];
	const nextArray = array.slice(1);
	
	return upperCaseString.concat(capitalizeWords(nextArray));
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
	someRecursive,
	isPalindrome,
	sumTo,
	capitalizeFirst,
	nestedEvenSum,
	capitalizeWords
};


