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
	return [...s].reduce((accumulator,e)=>{return e+accumulator},"");
}
console.log("Expected output of reverse('wangdong') is 120 and  " + myFunctionTest("gnodgnaw", function () {
	return reverse('wangdong');
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

// ​After you finish, make sure all your functions are in ONE JS file .
