class Bank {


    constructor(bankName, location, account, ifsc, interestRate){

        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
       

    }
    showDetails(){
        console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate} `);
    }
}

const sbiBank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598", 10.75);
console.log(sbiBank);
sbiBank.showDetails();

const axisBank = new Bank("AXIS Bank", "Bajirao Road, Pune", "456455466", "AXIS0004598", 10.50);
console.log(axisBank);
axisBank.showDetails();