"use strict";
var BookCategory;
(function (BookCategory) {
    BookCategory["Novel"] = "novel";
    BookCategory["comics"] = "comics";
    BookCategory["Thriller"] = "thriller";
})(BookCategory || (BookCategory = {}));
//constructor(id:number,Name:string,author:string,category:string){
// this.Id=id;
//}
class Book {
    constructor() {
        this.Id = 0;
        this.name = "";
        this.Author = "";
        this.category = BookCategory.Thriller;
    }
    displaybook() {
        return `ID=${this.Id}<br/>
        Name=${this.name}<br/>
        Author=${this.Author}<br/>
        category=${this.category.toString()} `;
    }
}
let book1 = new Book();
book1.Id = 1001;
book1.name = "Angels and Demons";
book1.Author = "Dan Brown";
book1.category = BookCategory.Thriller;
let books = new Array();
books.push(book1);
//books.push(new Book(1002,"Davinci Code","Charan","comics")); 
let placeholder = document.getElementById("placeholder");
if (placeholder != undefined) {
    placeholder.innerHTML = book1.displaybook();
}
//# sourceMappingURL=type1.js.map