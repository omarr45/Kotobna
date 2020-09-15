let logI = document.getElementById("loginNav");
let logO = document.getElementById("logoutNav");

if(sessionStorage.getItem("logged"))
{
    logI.parentNode.removeChild(logI);
}
else
{
    logO.parentNode.removeChild(logO);
}