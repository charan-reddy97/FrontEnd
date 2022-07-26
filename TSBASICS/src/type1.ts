enum BookCategory
{
    Novel="novel",
    comics="comics",
    Thriller="thriller"
}
//constructor(id:number,Name:string,author:string,category:string){
   // this.Id=id;

//}




class Book
{
    Id:number=0;
    name:string="";
    Author:string="";
    category:BookCategory=BookCategory.Thriller;
     displaybook():string
    {
       return `ID=${this.Id}<br/>
        Name=${this.name}<br/>
        Author=${this.Author}<br/>
        category=${this.category.toString()} `
    }
}

let book1:Book=new Book();
book1.Id=1001;
book1.name="Angels and Demons";
book1.Author="Dan Brown";
book1.category=BookCategory.Thriller;
let books:Array<Book>=new Array<Book>();
books.push(book1);
//books.push(new Book(1002,"Davinci Code","Charan","comics")); 
let placeholder:HTMLDivElement=<HTMLDivElement>document.getElementById("placeholder");
if(placeholder != undefined)
{
    placeholder.innerHTML=book1.displaybook();
}