console.log(`================ Constructor Function ===============`);

function Bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.show = function(){
        console.log(`Bank Details is: ${this.bankName}, ${this.location}, ${this.ifscCode}, ${this.branchCode}`)
    }
}



let yesBank = new Bank("YES Bank", "Chinchwad", "YESB000789", "658746");
yesBank.show();


let sbiBank = new Bank("SBI Bank", "Kothrud", "SBIN000789", "478956");
sbiBank.show();


let mahaBank = new Bank("MAHA Bank", "Tilak road", "MAHA000453", "658729");
mahaBank.show();

let axisBank = new Bank("Axis Bank", "Nigdi", "AXIS000428", "657825");
axisBank.show();

console.log(` `);
console.log(`================ Add Member ===============`);
console.log(` `);

function Bank2(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.show = function(){
        console.log(`Bank Details is: ${this.bankName}, ${this.location}, ${this.ifscCode}, ${this.branchCode}`)
    }
}

Bank2.prototype.openTime = "9 AM IST";
Bank2.prototype.closeTime = "6 PM IST";

let yesBank1 = new Bank2("YES Bank", "Chinchwad", "YESB000789", "658746");
yesBank1.show();

console.log(` Yes Bank working time is:  Opening Time: ${yesBank1.openTime}, and Close Time:  ${yesBank1.closeTime}`);

let sbiBank1 = new Bank2("SBI Bank", "Kothrud", "SBIN000789", "478956");
sbiBank.show();
console.log(` SBI Bank working time is:  Opening Time: ${sbiBank1.openTime}, and Close Time:  ${sbiBank1.closeTime}`);


let mahaBank1 = new Bank2("MAHA Bank", "Tilak road", "MAHA000453", "658729");
mahaBank1.show();
console.log(` MAHA Bank working time is:  Opening Time: ${mahaBank1.openTime}, and Close Time:  ${mahaBank1.closeTime}`);

let axisBank1 = new Bank2("Axis Bank", "Nigdi", "AXIS000428", "657825");
axisBank1.show();
console.log(` AXIS Bank working time is:  Opening Time: ${axisBank1.openTime}, and Close Time:  ${axisBank1.closeTime}`);

