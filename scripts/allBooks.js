class Book {
    constructor(title, author, category, imgSrc /*, rate, read, buy */ ) {
        this.title = title;
        this.category = category;
        this.imgSrc = imgSrc;
        this.author = author;
        /* this.rate = rate;
        this.read = read;
        this.buy = buy; */
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
        fig.appendChild(cover);
        fig.appendChild(figcap);
        fig.onclick = function() {
            sessionStorage.setItem("imgSrc", cover.src);
            sessionStorage.setItem("author", eAuthor.innerHTML);
            sessionStorage.setItem("title", eTitle.innerHTML);
            sessionStorage.setItem("catg", eCategory.innerHTML);
            window.location.href = "bookPreview.html";
        }

        container.appendChild(fig);
    }
}
class Books {
    constructor() {
        this.books = [];
        this.container = document.createElement("div");
        document.body.appendChild(this.container);
    }

    show(category) {
        this.container.innerHTML = "";

        for (let i = 0; i < this.books.length; i++) {
            const element = this.books[i];
            if (category == "All Books" || element.category == category)
                element.show(this.container);
        }
    }
    get numberOfBooks() {
        return this.books.length;
    }
}

let library = new Books();

//Book list
library.books.push(new Book("A Brief History of Time", "Stephen Hawking", "Science", "assets/covers/bhot.jpg"));
library.books.push(new Book("Harry Potter And The Order Of The Phoenix", "J.K. Rowling", "Novels", "assets/covers/hpop.jpeg"));
library.books.push(new Book("Awlad Haretna", "Naguib Mahfouz", "Novels", "assets/covers/ah.jpg"));
library.books.push(new Book("Astrophysics for People in a Hurry", "Neil DeGrasse Tyson", "Science", "assets/covers/aph.jpg"));
library.books.push(new Book("The Da Vinci Code", "Dan Brown", "Novels", "assets/covers/tdvc.jpg"));
library.books.push(new Book("Infinite Powers", "Steven Strogatz", "Science", "assets/covers/ip.jpg"));
library.books.push(new Book("The Mothers", "Brit Bennett", "Novels", "assets/covers/tm.jpeg"));
library.books.push(new Book("A Christmas Carol", "Charles Dickens", "Novels", "assets/covers/acc.jpg"));
library.books.push(new Book("Brief Answers To Big Questions", "Stephen Hawking", "Science", "assets/covers/babq.jpg"));
library.books.push(new Book("The Origin Of Species", "Charles Darwin", "Science", "assets/covers/toos.jpg"));
library.books.push(new Book("Anna Karenina", "Leo Tolstoy", "Novels", "assets/covers/ak.jpg"));
library.books.push(new Book("Murder On The Orient Express", "Agatha Christie", "Novels", "assets/covers/motoe.jpg"));
library.books.push(new Book("The Pleasure of Finding Things Out", "Richard P. Feynman", "Science", "assets/covers/tpofto.jpg"));
library.books.push(new Book("Cosmos", "Carl Sagan", "Science", "assets/covers/c.jpg"));
library.books.push(new Book("Great Expectations", "Charles Dickens", "Novels", "assets/covers/ge.jpg"));
library.books.push(new Book("Concepts of Modern Mathematics", "Ian Stewart", "Science", "assets/covers/comm.jpg"));
library.books.push(new Book("Mathematical Principles of Natural Philosophy", "Newton", "Science", "assets/covers/mponp.jpg"));
library.books.push(new Book("The Great Gatsby", "Scott Fitzgerald", "Novels", "assets/covers/tgg.jpg"));
library.books.push(new Book("Black Holes And Baby Universes", "Stephen Hawking", "Science", "assets/covers/bhabu.jpg"));
library.books.push(new Book("Still Me", "Jojo Moyes", "Novels", "assets/covers/sm.jpg"));

///////////////////////
library.show("All Books");