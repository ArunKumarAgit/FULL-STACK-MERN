//Question 1: User will give a string. Return the count of vowels.
//Ex. -> aayush -> Output: 3 -> AAYuSH -> Output: 3

var n = ("enter your name");
var a=prompt("enter string");
var s=a.split("");
var count =0;
for( var i=0;i<s.length;i++){
switch(s[i]){
case "a":
case "A":
       count++;
       break;
case "e":
case "E":
       count++;
       break;
case "i":
case "I":
       count++;
       break;
case "o":
case "O":
        count++;
        break;
case "u":
case "U":
        count++;
        break;
}
}
console.log("the total number of vowels is"+ " " +count);


//Question 2: User enters a number, check and tell whether that number is a prime number or not. 
//(If user enters, abcd. You handle that situation).


var n= prompt("enter any number");
n=parseInt(n);
if (isNaN(n))
{
  alert("enter a valid number");
}   else {
    var count=0;
    for (var i=2;i<n;i++)
{
     if (n%2==0){ 
     count=count+1;
     break;
        }
  }
       }
if (count==0)
{
  alert("prime number");
}
else 
{
  alert("not a prime number");
}













