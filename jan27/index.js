//Question: Take n inputs from the user. It has to be dynamic (multiple n inputs by user).
//i.e, I can enter 3 numbers as well as 30 numbers. It should give me the maximum of all of them.
// We will be using Array as the underlying data structure.

var n = prompt("enter the total number to be required");
n = parseInt(n);
var arr1 = [];
if(isNaN(n)) {
    alert("enter numbers only");
} else {

    for(var i=0; i<n; i++) {
    arr1.push(prompt("enter the number"+" " + i));

}}
var max = arr1[0];
for(var i = 1; i<n; i++){
if(arr1[i]>arr1[i-1]){
max = arr1[i];
}
}
alert("The maximum number is" +" "+ max);
