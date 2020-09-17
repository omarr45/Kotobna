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

        fig.onclick = function() {
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
library.books.push(new Book("A Brief History of Time", "Stephen Hawking", "Science", "assets/covers/bhot.jpg", "https://www.goodreads.com/book/show/3869.A_Brief_History_of_Time", "https://www.fisica.net/relatividade/stephen_hawking_a_brief_history_of_time.pdf"));
library.books.push(new Book("The Da Vinci Code", "Dan Brown", "Novels", "assets/covers/tdvc.jpg", "https://www.goodreads.com/book/show/30228538-the-da-vinci-code?from_search=true&from_srp=true&qid=k64zPgwqtg&rank=3", "https://danbrown.com/wp-content/themes/danbrown/assets/db_dvc_book_excerpts.pdf"));
library.books.push(new Book("Murder On The Orient Express", "Agatha Christie", "Novels", "assets/covers/motoe.jpg", "https://www.goodreads.com/book/show/853510.Murder_on_the_Orient_Express?from_search=true&from_srp=true&qid=6BycuUGXxO&rank=1", "http://detective.gumer.info/anto/christie_8_2.pdf"));
library.books.push(new Book("Infinite Powers", "Steven Strogatz", "Science", "assets/covers/ip.jpg", "https://www.goodreads.com/book/show/40796176-infinite-powers?from_search=true&from_srp=true&qid=pPYPjDJgnE&rank=1", "https://www.slideshare.net/kezyhuro89502/2019-infinite-powers-pdf-how-calculus-reveals-the-secrets-of-the-universe-by-steven-strogatz-houghton-mifflin-harcourt"));
/////
library.show();

//////Harry Potter Book event
document.getElementById("hBanner").onclick = function() {
    sessionStorage.setItem("imgSrc", "assets/covers/hpop.jpeg");
    sessionStorage.setItem("author", "J.K. Rowling");
    sessionStorage.setItem("title", "Harry Potter And The Order Of The Phoenix");
    sessionStorage.setItem("catg", "Novels");
    sessionStorage.setItem("read", "https://www.missskirtich.com/uploads/2/3/3/7/23374820/5_-_harry_potter_and_the_order_of_the_phoenix_chapter_37.pdf");
    sessionStorage.setItem("rate", "https://www.goodreads.com/book/show/1317181.Harry_Potter_and_the_Order_of_the_Phoenix?from_search=true&from_srp=true&qid=yIo5kQ6aD8&rank=2");
    window.location.href = "bookPreview.html";
}