function sum() {
    var n1 = document.getElementById("input1");
    n1 = n1.value;
    n1 = parseInt(n1);
    var n2 = document.getElementById("input2");
    n2 = n2.value;
    n2 = parseInt(n2);
    sum = n1 + n2;
    var sum1 = document.getElementById("sum");
    sum1.innerText = sum;
}