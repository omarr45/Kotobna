function validate() {
    var vldt = true;
    if (document.req.book.value == "") {
        alert("Please enter the book name");
        vldt = false;
    } else if (document.req.author.value == "") {
        alert("Please enter the author name");
        vldt = false;
    }
    return vldt;
}

function display() {
    if (validate())
        alert("Thanks! We will try to provide this book as soon as possible.")
}