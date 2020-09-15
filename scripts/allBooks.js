class Book {
    constructor(title, author, category, imgSrc) {
        this.title = title;
        this.category = category;
        this.imgSrc = imgSrc;
        this.author = author;
    }

    show(container) {
        var cover = document.createElement("img");
        cover.src = this.imgSrc;
        cover.className = "cover";

        var eTitle = document.createElement("p");
        var eAuthor = document.createElement("p");
        var eCategory = document.createElement("p");
        
        eTitle.innerHTML = this.title;
        eTitle.className = "title";
        eAuthor.innerHTML = this.author;
        eAuthor.className = "author";
        eCategory.innerHTML = this.category;
        eCategory.className = "category";
        
        var figcap = document.createElement("figcaption");
        figcap.className = "container";
        figcap.appendChild(eAuthor);
        figcap.appendChild(eTitle);
        figcap.appendChild(eCategory);

        var fig = document.createElement("figure");
        fig.className = "card";
        fig.appendChild(cover);
        fig.appendChild(figcap);

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
            if (category == "all" || element.category == category)
                element.show(this.container);
        }
    }
    get numberOfBooks() {
        return this.books.length;
    }
}

let library = new Books();

//Book list
for (let i = 0; i < 20; i++)
    library.books.push(new Book("A Brief History of Time", "Stephen Hawking", "Science", "assets/covers/BriefHistoryOfTime.jpg"));
///////////////////////
library.show("all");
