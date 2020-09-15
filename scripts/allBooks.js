class Book {
    constructor(title, author, category, imgSrc) {
        this.title = title;
        this.category = category;
        this.imgSrc = imgSrc;
        this.author = author;
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
        fig.onclick = function(){
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
for (let i = 0; i < 9; i++) {
    library.books.push(new Book("A Brief History of Time", "Stephen Hawking", "Science", "assets/covers/BriefHistoryOfTime.jpg"));
    library.books.push(new Book("Harry Potter And The Order Of The Phoenix", "JK, ROWLING", "Novels", "assets/covers/banners/harry_potter_and the_order_of_the_phoenix_book.jpeg"));
    library.books.push(new Book("أولاد حارتنا", "NAGIB MAHFOUZ", "Novels", "assets/covers/standard/awlad_haretna.jpg"));
    library.books.push(new Book("The Da vinci Code", "DAN BROWN", "Novels", "assets/covers/standard/the_da_vinci_code.jpg"));
    library.books.push(new Book("The Great Gatspy", "SCOTT FITZGERALD", "Novels", "assets/covers/standard/the_great_gatspy.jpg"));
    library.books.push(new Book("Me And A Guy Named Elvis Presly", "JERRY SCHILLING", "Biography", "assets/covers/standard/me_and_a_guy_named_elvis_presly.jpg"));
}
///////////////////////
library.show("All Books");