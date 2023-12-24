function fibonacci(num) {
// your code here
	const num = prompt("Enter the value: ");
	if (num <= 0) {
    return "Invalid input. Please provide a positive integer greater than 0.";
  }

  let a = 0, b = 1;

  for (let i = 2; i <= num; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return a;
}

const result = fibonacci(num); 
alert(result);
module.exports = fibonacci;
