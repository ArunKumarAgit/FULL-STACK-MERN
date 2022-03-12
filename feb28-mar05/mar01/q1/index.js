function abc(){
    var pass = document.getElementById("pass1");
    pass =pass.value;
    var pass2 = document.getElementById("pass2");
    pass2 = pass2.value;
    var message = document.getElementById("message");
    if(pass == pass2){
        message.innerText = "matched";
    }
    else{
       message.innerText = "not matched";
    }
}
