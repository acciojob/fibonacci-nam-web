function fibonacci(num) {
// your code here
  let a = 0, b = 1, sum = 1;
	if(num <=1 )
		return a;
  for (let i = 2; i <= num; i++) {
    let temp = a + b;
	  sum += temp;
	  a = b;
	  b = temp;
  }

  return sum;
}
const num = prompt("Enter the value: ");
const result = fibonacci(num); 
alert(result);
module.exports = fibonacci;
