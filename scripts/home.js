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
    setTimeout(startSliding, 1500);
}