function Book (title, author, pages, reading_state) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.reading_state  = reading_state;

    this.showBook = function () {
        return title + author + pages + reading_state;
    }
 }

 theHobbit = new Book ("The Hobbit", "J.R.R.Tolkien", "295 pages", "not read yet");

 const infoAboutBook = theHobbit.showBook();

 console.log(infoAboutBook);