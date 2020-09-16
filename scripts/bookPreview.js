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

document.body.appendChild(cover);
document.body.appendChild(title);
document.body.appendChild(author);
document.body.appendChild(catg);

function ReviewMe(){
    window.open(sessionStorage.getItem("rate"));
}
function ReadMe(){
    window.open(sessionStorage.getItem("read"));
}