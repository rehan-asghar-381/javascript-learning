// creating class with constructor


class Book{
    constructor(
        // Defining parameters:
        title,
        author,
        ISBN,
        pubYear,
        pageNumber,
        currentPage,
        readStatus
    ){
        this.title      = title;
        this.author     = author;
        this.ISBN       = ISBN;
        this.pubYear    = pubYear;
        this.pageNumber = pageNumber;
        this.currentPage= currentPage;
        this.readStatus = readStatus;
    }

    updateCurrentPage(page){

        this.currentPage = page;

    }

    updateReadStatus(status){
        this.readStatus     = status;
    }
}

export default Book;