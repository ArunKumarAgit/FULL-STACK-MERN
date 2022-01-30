//Assignment 1:
//-> Take 3 numbers from the user and alert minimum of those three.
//(10, -20, 50 -> -20), (15, 20, 45 -> 15).

var a = prompt("n1");
var b = prompt("n2");
var c = prompt("n3");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
if (a<b && a<c) {
    alert(a);
    alert("a is maximum");
} else if(b<a && b<c) {
    alert(b);
    alert("b is maximum");
} else {
   alert(c);
   alert("c is maximum");
}

//assignment 2:
//Take a character from the user and show whether it is a volvel or consonant.

var a = prompt("enter the char");
if (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u') {
    alert("it is ovel");
} else {
    alert("it is consonant");
}

