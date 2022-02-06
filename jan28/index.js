//Question: Take n inputs from the user. It has to be dynamic (multiple n inputs by user).
//i.e, I can enter 3 numbers as well as 30 numbers. It should give me the maximum of all of them.
// We will be using Array as the underlying data structure.

var n = prompt("enter the num");
n = parseInt(n);
if(isNaN(n)) {
    alert("enter numbers only");
} else {
    for(var i=n; i>=0; i--)  {
    console.log(i);
}}


//quetion2

var n1=0;
var n2=1;
 console.log(n1);
 console.log(n2);
var count=10;
var n3;
    for(var i =2;i<=count;i++)
     {
	    n3=n1+n2;
	      console.log(n3);
	        n1=n2;
         n2=n3;
}
