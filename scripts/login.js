function validateEm(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}

function validate() {
    var validation = true;

    if (document.logForm.Email.value == "") {
        validation = false;
        alert("The email can not be empty");
    } else if (!validateEm(document.logForm.Email.value)) {
        validation = false;
        alert("Invalid email format");
    } else if (document.logForm.Password.value == "") {
        validation = false;
        alert("The password can not be empty");
    }
    return validation;
}

function Registeration() {
    window.location.href = 'register.html';
}

function login() {
    if (validate()) {
        sessionStorage.setItem("logged", document.logForm.Email.value);
        window.location.href = "home.html";
    }
}