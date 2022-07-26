let message:string="Hello Charan";

let x: number=10;
let y: number =90;
let sum:number =add(x,y);
//let sum:number;
console.debug(`${x} + ${y}=${sum}`);

//console.debug(message);
function add(x:number, y:number):number
{
    return x+y;
}
function sub(x:number,y:number):number
{
    return x-y;
}
let fruits:Array<string> =["banana","orange","Apple"];
function myfruits(arr:Array<string>):void
{
 arr.forEach((item)=>
 {
     console.debug(item);
 })
}
myfruits(fruits);

