let cover = document.createElement("img");
cover.src = sessionStorage.getItem("imgSrc");
cover.className = "cover";

let title = document.createElement("p");
title.innerHTML = sessionStorage.getItem("title");
title.className = "title";

let author = document.createElement("p");
author.innerHTML = "By: " + sessionStorage.getItem("author");
author.className = "author";


let catg = document.createElement("p");
catg.innerHTML = "Category: " + sessionStorage.getItem("catg");
catg.className = "category"

let btnReview = document.createElement("button");
btnReview.innerHTML = "Ratings & Reviews"
btnReview.className = "myButton"
btnReview.addEventListener("click", ReviewMe);

let btnRead = document.createElement("button");
btnRead.innerHTML = "Read Online"
btnRead.className = "myButton";
btnRead.addEventListener("click", ReadMe);

let banner = document.createElement("div");
banner.className = "banner";
banner.id = "banner"
banner.appendChild(cover);
banner.appendChild(title);
banner.appendChild(author);
banner.appendChild(catg);
banner.appendChild(btnReview);
banner.appendChild(btnRead);

document.body.appendChild(banner);

function ReviewMe() {
    window.open(sessionStorage.getItem("rate"));
}

function ReadMe() {
    window.open(sessionStorage.getItem("read"));
}