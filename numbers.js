// Please enter a five-digit number
let number = prompt('Enter a five-digit number:');

// Converting a number into a string and splitting the string into an array of individual numbers
let result = number.toString().split('');

// Combining these numbers into a string with spaces between them and I derive the result
alert(result.join(' '));
console.log(result.join(' '));