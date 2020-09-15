function LogMeOut() {
    alert("You'll be logged out\nSee you soon!")
    sessionStorage.setItem("logged", "");
    window.location.href = 'home.html';
}