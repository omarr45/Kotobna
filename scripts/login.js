function Validation() {
    var validation = true;
    if (document.logForm.Email.value == "") {
        validation = false;
        alert("E-mail Can not be EMPTY !!");
    } else if (document.logForm.Email.value.indexOf("@") == -1 || document.logForm.Email.value.indexOf(".") == -1) {
        validation = false;
        alert("Please Enter E-mail Format ex: jackie@gmail.com");
    } else if (document.logForm.Password.value == "") {
        validation = false;
        alert("Password Can not be EMPTY !!");
    }
    return validation;
}

function Registeration() {
    window.location.href = 'register.html';
}

function login() {
    if (Validation()) {
        sessionStorage.setItem("logged", document.logForm.Email.value);
        window.location.href = "home.html";
    }
}