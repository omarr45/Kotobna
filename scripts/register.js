function registeration() {
    if(document.regisForm.fname.value == "") {
        alert("First Name Can not be EMPTY !!");
    }
    else if(document.regisForm.sname.value == "") {
        alert("Second Name Can not be EMPTY !!");
    }
    else if(document.regisForm.Email.value == ""){
        alert("E-mail Can not be EMPTY !!");
    }
    else if(document.regisForm.Email.value.indexOf("@") == -1 || document.regisForm.Email.value.indexOf(".") == -1)
    {
        alert("Please Enter E-mail Format eg: jackie@gmail.com");
    }
    else if(document.regisForm.pass.value == "" || document.regisForm.passConfirm.value == ""){
        alert("The Password Can not be EMPTY !!");
    }
    else if((document.regisForm.pass.value !== document.regisForm.passConfirm.value)) {
        alert("The Password Does Not MATCH !!");
    }
    else {
        alert("You Have Registered Successfully");
        window.location.href = "login.html";
    }
}
