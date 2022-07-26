interface Iaccount
{
    displayaccountinfo() : string;
    showaccountinfo(): void;
}
interface Irating
{
   customerpriority(priority:number|string|undefined):void
}

class Account
{
    Accno:number=0;
    Balance:number=0;
    Customername:string="";
    intrestrate:number=0;
    priority:number|string|undefined
    calAnnualInterest(): number
    {
        return this.Balance*this.intrestrate;
    }
}

class SavingsAccount extends Account implements Iaccount,Irating
{
    showaccountinfo(): void
     {
        alert( `Account number:${this.Accno}
        Balance:${this.Balance}
         Customername:${this.Customername}
         Annualintrest:${this.calAnnualInterest()}`);
       
    }
    customerpriority(priority: string | number | undefined): void 
    {
        this.priority=priority;
    }
    displayaccountinfo(): string
     {
       
        return `Account number:${this.Accno}<br />
                Balance:${this.Balance}<br />
                 Customername:${this.Customername}<br />
                Annualintrest:${this.calAnnualInterest()}<br />`
        ;
    }
   
    intrestrate: number=.09;

}
class PremiumAccount extends Account implements Iaccount
{
    showaccountinfo(): void 
    {
        alert( `Account number:${this.Accno}
                Balance:${this.Balance}
                Customername:${this.Customername}
                Annualintrest:${this.calAnnualInterest()}`)
        ;
       
    }
    customerpriority(priority: string | number | undefined): void
     {
        this.priority=priority;
     }
    intrestrate: number=.06;
    
    displayaccountinfo(): string 
    {
       
        return `Account number:${this.Accno}<br/>
       Balance:${this.Balance}<br/>
        Customername:${this.Customername}<br/>
        Annualintrest:${this.calAnnualInterest()}<br/>
        Priority:${this.customerpriority("good")}<br/>`
        ;
    }
    
}

let saccount:SavingsAccount=new SavingsAccount();
saccount.Balance=25000;
console.debug(saccount.calAnnualInterest());
let paccount:PremiumAccount=new PremiumAccount();
paccount.Balance=25000;
console.debug(paccount.calAnnualInterest());
let place:HTMLDivElement=<HTMLDivElement>document.getElementById("placeholder");
place.innerHTML+=paccount.displayaccountinfo();
let place1:HTMLDivElement=<HTMLDivElement>document.getElementById("placeholder");
place.innerHTML+=saccount.displayaccountinfo();

