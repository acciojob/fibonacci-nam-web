function fibonacci(num) {
// your code here
  let a = 0, b = 1;
	if(num == 1 )
		return a;
	if(num == 2)
		return b;
  for (let i = 2; i <= num; i++) {
    let temp = a + b;
	  a = b;
	  b = temp;
  } 

  return a;
}
const num = prompt("Enter the value: ");
const result = fibonacci(num); 
alert(result);
module.exports = fibonacci;
