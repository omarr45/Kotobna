var imageIndex = 0;
startSliding();

function startSliding() {
    var i;
    var x = document.getElementsByClassName("slideShow");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    imageIndex++;
    if (imageIndex > x.length) {
        imageIndex = 1
    }
    x[imageIndex - 1].style.display = "block";
    setTimeout(startSliding, 3000);
}

function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function Submit() {
    if (validateEmail(document.subscribe.Email.value))
        alert("You've been succesfully subscribed! Thank you ♥")
    else
        alert("Invalid email format")
}