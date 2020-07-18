// For each of the following, write at least one test case for each function.  They should all be nicely formatted. Do your development in Intellij and also see the further instructions below.    If you follow those instructions you can create an html page with your JavaScript in that page and then post it to your site.
function myFunctionTest(expected, call) {
	//console.assert(expected, call()),"TEST SUCCEEDED":"TEST FAILED";
	if (Array.isArray(expected)) {
		let ret = call();
		return Array.isArray(ret) && expected.length == ret.length &&
			expected.every(function (v, i) {
				return v == ret[i]
			}) ? "TEST SUCCEEDED" : "TEST FAILED";
	}
	return expected === call() ? "TEST SUCCEEDED" : "TEST FAILED";
}
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
function max(a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
}
console.log("Expected output of max(20,10) is 20 and  " + myFunctionTest(20, function () {
	return max(20, 10);
}));
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a, b, c) {
	return max(a, max(b, c));
}
console.log("Expected output of maxOfThree(20,10,80) is 80 and  " + myFunctionTest(80, function () {
	return maxOfThree(20,10,80);
}));
// Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowell(c) {
	if (c === undefined || c === null || c.length != 1) {
		return false;
	}
	//a, e, i, o, u.
	const VOWList = "aeiou";
	return VOWList.indexOf(c) >= 0;

}
console.log("Expected output of isVowell('e') is true and  " + myFunctionTest(true, function () {
	return isVowell("e");
}));
console.log("Expected output of isVowell('d') is false and  " + myFunctionTest(false, function () {
	return isVowell("d");
}));
console.log("Expected output of isVowell('ae') is false and  " + myFunctionTest(false, function () {
	return isVowell("ae");
}));
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
function sum(arr) {
	return arr.reduce(function (prevVal, e, i, array) {
		return prevVal + e;
	});
}
console.log("Expected output of sum([1,2,3,4,5]) is 15 and  " + myFunctionTest(15, function () {
	return sum([1,2,3,4,5]);
}));

function multiply(arr) {
	return arr.reduce(function (prevVal, e) {
		return prevVal * e;
	});
}
console.log("Expected output of multiply([1,2,3,4,5]) is 120 and  " + myFunctionTest(120, function () {
	return multiply([1,2,3,4,5]);
}));
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(s) {
	let r = "";
	for (let i = s.length - 1; i >=0; i--) {
		r += s[i];
	}
	return r;
}
console.log("Expected output of reverse('wangdong') is 120 and  " + myFunctionTest("gnodgnaw", function () {
	return reverse('wangdong');
}));
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(words) {
	return words.reduce(function (preval, e) {
		return preval.length > e.length ? preval : e;
	}).length;
}
console.log("Expected output of findLongestWord(['wangdong','23','w','wwwwddd']) is 8 and  " + myFunctionTest(8, function () {
	return findLongestWord(['wangdong','23','w','wwwwddd']);
}));
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(words, i) {
	return words.filter(function (v) {
		return v.length > i;
	});
}

console.log("Expected output of filterLongWords(['wangdong','23','w','wwwwddd'],2) is ['wangdong', 'wwwwddd'] and  " + myFunctionTest(['wangdong', 'wwwwddd'], function () {
	return filterLongWords(['wangdong','23','w','wwwwddd'],2);
}));
// Modify the jsfiddle on the map/filter/reduce slide as follows:

const a = [1,3,5,3,3]; 
// a) multiply each element by 10; 
const b = a.map(function(elem, i, array) {
  return elem + 10;
})
console.log(b);
// b) return array with all elements equal to 3; 
const c = a.filter(function(elem, i, array){
  return elem === 3;});
console.log(c);
// c) return the product of all elements;
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
console.log(d);






// ​After you finish, make sure all your functions are in ONE JS file .
