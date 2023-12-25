function fibonacci(num) {
// your code here
  let a = 0, b = 1;

  for (let i = 2; i <= num; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}
const num = prompt("Enter the value: ");
const result = fibonacci(num); 
alert(result);
module.exports = fibonacci;
