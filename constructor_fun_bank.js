console.log(` `);
console.log(`================ Add Member ===============`);
console.log(` `);

function Bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.show = function(){
        console.log(`Bank Details is: ${this.bankName}, ${this.location}, ${this.ifscCode}, ${this.branchCode}`)
    }
}

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

let yesBank = new Bank("YES Bank", "Chinchwad", "YESB000789", "658746");
yesBank.show();

console.log(`${yesBank.bankName} working time is:  Opening Time: ${yesBank.openTime}, and Close Time:  ${yesBank.closeTime}`);

let sbiBank = new Bank("SBI Bank", "Kothrud", "SBIN000789", "478956");
sbiBank.show();
let sbi = sbiBank.bankName
console.log(`${sbi} working time is:  Opening Time: ${sbiBank.openTime}, and Close Time:  ${sbiBank.closeTime}`);


let mahaBank = new Bank("MAHA Bank", "Tilak road", "MAHA000453", "658729");
mahaBank.show();
console.log(`${mahaBank.bankName} working time is:  Opening Time: ${mahaBank.openTime}, and Close Time:  ${mahaBank.closeTime}`);

let axisBank = new Bank("Axis Bank", "Nigdi", "AXIS000428", "657825");
axisBank.show();
console.log(`${axisBank.bankName} working time is:  Opening Time: ${axisBank.openTime}, and Close Time:  ${axisBank.closeTime}`);