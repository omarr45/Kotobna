let cover = document.createElement("img");
cover.src = sessionStorage.getItem("imgSrc");
cover.className = "cover";

let author = document.createElement("p");
author.innerHTML = sessionStorage.getItem("author");
author.className = "author";

let title = document.createElement("p");
title.innerHTML = sessionStorage.getItem("title");
title.className = "title";

let catg = document.createElement("p");
catg.innerHTML = sessionStorage.getItem("catg");
catg.className = "category"

document.body.appendChild(cover);
document.body.appendChild(author);
document.body.appendChild(title);
document.body.appendChild(catg);