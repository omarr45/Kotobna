let logI = document.getElementById("loginNav");
let logO = document.getElementById("logoutNav");
let admin = document.getElementById("adminNav");

if (sessionStorage.getItem("logged")) {
    logI.parentNode.removeChild(logI);
    if (sessionStorage.getItem("logged") != "admin@kotobna.com")
        admin.parentNode.removeChild(admin);
} else {
    logO.parentNode.removeChild(logO);
    admin.parentNode.removeChild(admin);
}