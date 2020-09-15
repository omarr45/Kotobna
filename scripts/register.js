function Validation() {
    
    var val=true;

    if(document.regisForm.fname.value == "") {
        alert("First Name Can not be EMPTY !!");
        val=false;
    }
    else if(document.regisForm.sname.value == "") {
        alert("Second Name Can not be EMPTY !!");
        val=false;
    }
    else if(document.regisForm.Email.value == ""){
        alert("E-mail Can not be EMPTY !!");
        val=false;
    }
    else if(document.regisForm.Email.value.indexOf("@") == -1 || document.regisForm.Email.value.indexOf(".") == -1)
    {
        alert("Please Enter E-mail Format eg: jackie@gmail.com");
        val=false;
    }
    else if(document.regisForm.pass.value == "" || document.regisForm.passConfirm.value == ""){
        alert("The Password Can not be EMPTY !!");
        val=false;
    }
    else if((document.regisForm.pass.value !== document.regisForm.passConfirm.value)) {
        alert("The Password Does not MATCH !!");
        val=false;
    }
    return val;
}

function register()
{
    if(Validation())
    {
        alert("You Have Registered Successfully");
        sessionStorage.setItem("logged", document.regisForm.Email.value);
        window.location.href = "home.html";
    }
}
