function validateEm(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}
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
    else if(!validateEm(document.regisForm.Email.value))
    {
      val = false;
      alert("Invalid email format");
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
