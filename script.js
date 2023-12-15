function fibonacci(num) {
// your code here
	if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
const result = fibonacci(5); 
console.log(result);
module.exports = fibonacci;
