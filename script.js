function fibonacci(num) {
// your code here
	const num = prompt("Enter the value: ");
	if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

const result = fibonacci(num); 
alert(result);
module.exports = fibonacci;
