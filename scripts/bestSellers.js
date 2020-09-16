class Book {
    constructor(title, author, category, imgSrc, rate, read) {
        this.title = title;
        this.category = category;
        this.imgSrc = imgSrc;
        this.author = author;
        this.rate = rate;
        this.read = read;
    }
    
    show(container) {
        let cover = document.createElement("img");
        cover.src = this.imgSrc;
        cover.className = "cover";

        let eTitle = document.createElement("p");
        let eAuthor = document.createElement("p");
        let eCategory = document.createElement("p");

        eTitle.innerHTML = this.title;
        eTitle.className = "title";
        eAuthor.innerHTML = this.author;
        eAuthor.className = "author";
        eCategory.innerHTML = this.category;
        eCategory.className = "category";

        let figcap = document.createElement("figcaption");
        figcap.appendChild(eAuthor);
        figcap.appendChild(eTitle);
        figcap.appendChild(eCategory);

        let fig = document.createElement("figure");
        fig.className = "card";

        let glob = this;
        
        fig.onclick = function(){
            sessionStorage.setItem("imgSrc", glob.imgSrc);
            sessionStorage.setItem("author", glob.author);
            sessionStorage.setItem("title", glob.title);
            sessionStorage.setItem("catg", glob.category);
            sessionStorage.setItem("read", glob.read);
            sessionStorage.setItem("rate", glob.rate);
            window.location.href = "bookPreview.html";
        }
        fig.appendChild(cover);
        fig.appendChild(figcap);

        container.appendChild(fig);
    }
}
class Books {
    constructor() {
        this.books = [];
        this.container = document.getElementById("grid-container");
    }

    show() {
        for (let i = 0; i < this.books.length; i++) {
            const element = this.books[i];
                element.show(this.container);
        }
    }

}

let library = new Books();
////Best 5 Seller Books
library.books.push(new Book("Awlad Haretna", "Naguib Mahfouz", "Novels", "assets/covers/ah.jpg"));
library.books.push(new Book("The Da Vinci Code", "Dan Brown", "Novels", "assets/covers/tdvc.jpg"));
library.books.push(new Book("The Great Gatsby", "Scott Fitzgerald", "Novels", "assets/covers/tgg.jpg"));
library.books.push(new Book("Murder On The Orient Express", "Agatha Christie", "Novels", "assets/covers/motoe.jpg"));
library.books.push(new Book("Still Me", "Jojo Moyes", "Novels", "assets/covers/sm.jpg"));
/////
library.show();

//////Harry Potter Book event
document.getElementById("hBanner").onclick = function(){
        sessionStorage.setItem("imgSrc", "assets/covers/hpop.jpeg");
        sessionStorage.setItem("author", "J.K. Rowling");
        sessionStorage.setItem("title", "Harry Potter And The Order Of The Phoenix");
        sessionStorage.setItem("catg", "Novels");
        sessionStorage.setItem("read", "");
        sessionStorage.setItem("rate", "");
        window.location.href = "bookPreview.html";
}