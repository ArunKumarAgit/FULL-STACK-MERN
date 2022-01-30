//Write a program to print all prime numbers in range 1 to n.take a input from the user

var num = prompt("Enter a number");
num = parseInt(num);
var count = 0;
if(isNaN(num)) {
    alert("Please enter the number");
}
    for(var i = 1; i <= num; i++) {
    if(num % i == 0) {
    count++;
    }
}
    if(count == 2) {
        alert(num + " is prime a number");
     }
     else {
        alert(num + " is not a prime number");
      }


