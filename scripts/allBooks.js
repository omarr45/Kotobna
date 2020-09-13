class Book
{
    constructor(title, author, category,imgSrc)
    {
        this.title = title;
        this.category = category;
        this.imgSrc = imgSrc;
        this.author = author;
    }

    show(container)
    {
        var cover = document.createElement("img");
        cover.width = 300;
        cover.height = 300;
        cover.src = this.imgSrc;
        
        var figcap = document.createElement("figcaption");
        figcap.innerHTML += this.author + "<br>";
        figcap.innerHTML += this.title + "<br>";
        figcap.innerHTML += this.category + "<br>";
        

        var fig = document.createElement("figure");
        fig.style.width = "300px";
        fig.style.height = "400px";
        fig.style.float = "left";
        fig.appendChild(cover);
        fig.appendChild(figcap);

        container.appendChild(fig);
    }
}
class Books
{
    constructor()
    {
        this.books = [];
    }

    get allBooks()
    {
        return this.books;
    }

    show(category)
    {
        var container = document.getElementById("blist");
        container.innerHTML = "";

        for (let i = 0; i < this.books.length; i++) {
            const element = this.books[i];
            if(category == "all" || element.category == category)
                element.show(container);
        }
    }
    get numberOfBooks()
    {
        return this.books.length;
    }
}

let library = new Books();

//Book list
for (let i = 0; i < 20; i++)
    library.books.push(new Book("Hello", "Ahmed Tawfik", "novels", "/home/tawfik/Pictures/Screenshot from 2020-07-26 05-23-19.png"));
library.show("all");