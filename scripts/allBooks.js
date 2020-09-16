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
        this.container = document.createElement("div");
        this.container.style.marginLeft = "90px";
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
}

let library = new Books();

//Book list
library.books.push(new Book("A Brief History of Time", "Stephen Hawking", "Science", "assets/covers/bhot.jpg", "https://www.goodreads.com/book/show/3869.A_Brief_History_of_Time", "https://www.fisica.net/relatividade/stephen_hawking_a_brief_history_of_time.pdf"));
library.books.push(new Book("Harry Potter And The Order Of The Phoenix", "J.K. Rowling", "Novels", "assets/covers/hpop.jpeg", "https://www.goodreads.com/book/show/1317181.Harry_Potter_and_the_Order_of_the_Phoenix?from_search=true&from_srp=true&qid=yIo5kQ6aD8&rank=2", "https://www.missskirtich.com/uploads/2/3/3/7/23374820/5_-_harry_potter_and_the_order_of_the_phoenix_chapter_37.pdf"));
library.books.push(new Book("Awlad Haretna", "Naguib Mahfouz", "Novels", "assets/covers/ah.jpg", "https://www.goodreads.com/book/show/2364284._?from_search=true&from_srp=true&qid=6CUf4BkX7l&rank=1", "https://www.bookleaks.com/files/ketab/ketab3/188.pdf"));
library.books.push(new Book("Astrophysics for People in a Hurry", "Neil DeGrasse Tyson", "Science", "assets/covers/aph.jpg", "https://www.goodreads.com/book/show/32191710-astrophysics-for-people-in-a-hurry?from_search=true&from_srp=true&qid=ffOjT4E2gi&rank=1", "https://field-geologist.cm/wp-content/uploads/2019/02/Astrophysics.pdf"));
library.books.push(new Book("The Da Vinci Code", "Dan Brown", "Novels", "assets/covers/tdvc.jpg", "https://www.goodreads.com/book/show/30228538-the-da-vinci-code?from_search=true&from_srp=true&qid=k64zPgwqtg&rank=3", "https://danbrown.com/wp-content/themes/danbrown/assets/db_dvc_book_excerpts.pdf"));
library.books.push(new Book("Infinite Powers", "Steven Strogatz", "Science", "assets/covers/ip.jpg", "https://www.goodreads.com/book/show/40796176-infinite-powers?from_search=true&from_srp=true&qid=pPYPjDJgnE&rank=1", "https://www.slideshare.net/kezyhuro89502/2019-infinite-powers-pdf-how-calculus-reveals-the-secrets-of-the-universe-by-steven-strogatz-houghton-mifflin-harcourt"));
library.books.push(new Book("The Great Gatsby", "Scott Fitzgerald", "Novels", "assets/covers/tgg.jpg", "https://www.goodreads.com/book/show/4671.The_Great_Gatsby", "https://docs.google.com/viewer?a=v&pid=sites&srcid=bWVubG9hdGhlcnRvbmhzLmNvbXxtcnMtYmVyZ2hvdXNlLWVuZ2xpc2gtMjAxM3xneDo0MjM5ZDNlNjFlNjExM2Ey"));
library.books.push(new Book("A Christmas Carol", "Charles Dickens", "Novels", "assets/covers/acc.jpg", "https://www.goodreads.com/book/show/5326.A_Christmas_Carol?from_search=true&from_srp=true&qid=P0SqdjfKo5&rank=1", "http://www.gutenberg.org/files/24022/24022-h/24022-h.htm"));
library.books.push(new Book("Brief Answers To Big Questions", "Stephen Hawking", "Science", "assets/covers/babq.jpg", "https://www.goodreads.com/book/show/40277241-brief-answers-to-the-big-questions?from_search=true&from_srp=true&qid=diPOSkheV8&rank=1", "https://www.pdfdrive.com/brief-answers-to-the-big-questions-e196864263.html"));
library.books.push(new Book("The Origin Of Species", "Charles Darwin", "Science", "assets/covers/toos.jpg", "https://www.goodreads.com/book/show/22463.The_Origin_of_Species?from_search=true&from_srp=true&qid=0XsKB9eIxf&rank=1", "http://www.vliz.be/docs/Zeecijfers/Origin_of_Species.pdf"));
library.books.push(new Book("Anna Karenina", "Leo Tolstoy", "Novels", "assets/covers/ak.jpg", "https://www.goodreads.com/book/show/15823480-anna-karenina?from_search=true&from_srp=true&qid=UwwFZhdsnL&rank=1", "https://planetpdf.com/planetpdf/pdfs/free_ebooks/Anna_Karenina_NT.pdf"));
library.books.push(new Book("Murder On The Orient Express", "Agatha Christie", "Novels", "assets/covers/motoe.jpg", "https://www.goodreads.com/book/show/853510.Murder_on_the_Orient_Express?from_search=true&from_srp=true&qid=6BycuUGXxO&rank=1", "http://detective.gumer.info/anto/christie_8_2.pdf"));
library.books.push(new Book("The Pleasure of Finding Things Out", "Richard P. Feynman", "Science", "assets/covers/tpofto.jpg", "https://www.goodreads.com/book/show/10260.The_Pleasure_of_Finding_Things_Out?from_search=true&from_srp=true&qid=qfVR176qcs&rank=1", "http://www.sitpor.org/wp-content/uploads/2015/03/Helix-Books-Richard-P.-Feynman-The-Pleasure-of-Finding-Things-Out_-The-Best-Short-Works-of-Richard-Feynman-Perseus-Publishing-Company-1999.pdf"));
library.books.push(new Book("Cosmos", "Carl Sagan", "Science", "assets/covers/c.jpg", "https://www.goodreads.com/book/show/55030.Cosmos?from_search=true&from_srp=true&qid=IZxM6jmujO&rank=1", "https://www.pdfdrive.com/cosmos-e165916976.html"));
library.books.push(new Book("Great Expectations", "Charles Dickens", "Novels", "assets/covers/ge.jpg", "https://www.goodreads.com/book/show/2623.Great_Expectations?from_search=true&from_srp=true&qid=TDcNDmFLNO&rank=1", "https://www.planetebook.com/free-ebooks/great-expectations.pdf"));
library.books.push(new Book("Concepts of Modern Mathematics", "Ian Stewart", "Science", "assets/covers/comm.jpg", "https://www.goodreads.com/book/show/183761.Concepts_of_Modern_Mathematics?from_search=true&from_srp=true&qid=I3kFPxsy5w&rank=1", "https://www.pdfdrive.com/concepts-of-modern-mathematics-e185297001.html"));
library.books.push(new Book("Mathematical Principles of Natural Philosophy", "Newton", "Science", "assets/covers/mponp.jpg", "https://www.goodreads.com/book/show/4163458-sir-isaac-newton-s-mathematical-principles-of-natural-philosophy-and-his?from_search=true&from_srp=true&qid=tXqbcbvCgq&rank=3", "http://redlightrobber.com/red/links_pdf/Isaac-Newton-Principia-English-1846.pdf"));
library.books.push(new Book("The Great Gatsby", "Scott Fitzgerald", "Novels", "assets/covers/tgg.jpg", "ttps://www.goodreads.com/book/show/4671.The_Great_Gatsby?from_search=true&from_srp=true&qid=3v2tTyGBCP&rank=1", "https://www.planetebook.com/free-ebooks/the-great-gatsby.pdf"));
library.books.push(new Book("Black Holes And Baby Universes", "Stephen Hawking", "Science", "assets/covers/bhabu.jpg", "https://www.goodreads.com/book/show/53200.Black_Holes_and_Baby_Universes_and_Other_Essays?from_search=true&from_srp=true&qid=QXorNG0GwU&rank=1", "https://www.pdfdrive.com/black-holes-and-baby-universes-and-other-essays-e162318584.html"));
library.books.push(new Book("Where The Crawdads Sing", "Delia Owens", "Novels", "assets/covers/wtcs.jpg", "https://www.goodreads.com/book/show/36809135-where-the-crawdads-sing", "http://ekladata.com/II-LIcHissT_yxzefGP8km-66jc/Where-the-Crawdads-Sing-VO-.pdf"));

///////////////////////
library.show("All Books");