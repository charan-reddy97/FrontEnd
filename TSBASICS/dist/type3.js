"use strict";
class Account {
    constructor() {
        this.Accno = 0;
        this.Balance = 0;
        this.Customername = "";
        this.intrestrate = 0;
    }
    calAnnualInterest() {
        return this.Balance * this.intrestrate;
    }
}
class SavingsAccount extends Account {
    constructor() {
        super(...arguments);
        this.intrestrate = .09;
    }
    showaccountinfo() {
        alert(`Account number:${this.Accno}
        Balance:${this.Balance}
         Customername:${this.Customername}
         Annualintrest:${this.calAnnualInterest()}`);
    }
    customerpriority(priority) {
        this.priority = priority;
    }
    displayaccountinfo() {
        return `Account number:${this.Accno}<br />
                Balance:${this.Balance}<br />
                 Customername:${this.Customername}<br />
                Annualintrest:${this.calAnnualInterest()}<br />`;
    }
}
class PremiumAccount extends Account {
    constructor() {
        super(...arguments);
        this.intrestrate = .06;
    }
    showaccountinfo() {
        alert(`Account number:${this.Accno}
                Balance:${this.Balance}
                Customername:${this.Customername}
                Annualintrest:${this.calAnnualInterest()}`);
    }
    customerpriority(priority) {
        this.priority = priority;
    }
    displayaccountinfo() {
        return `Account number:${this.Accno}<br/>
       Balance:${this.Balance}<br/>
        Customername:${this.Customername}<br/>
        Annualintrest:${this.calAnnualInterest()}<br/>
        Priority:${this.customerpriority("good")}<br/>`;
    }
}
let saccount = new SavingsAccount();
saccount.Balance = 25000;
console.debug(saccount.calAnnualInterest());
let paccount = new PremiumAccount();
paccount.Balance = 25000;
console.debug(paccount.calAnnualInterest());
let place = document.getElementById("placeholder");
place.innerHTML += paccount.displayaccountinfo();
let place1 = document.getElementById("placeholder");
place.innerHTML += saccount.displayaccountinfo();
//# sourceMappingURL=type3.js.map