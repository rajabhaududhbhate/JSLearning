console.log("Object element in a Set and Traveerse this Set using for loop then just loged in console Bank Name and its location ");
console.log("");



class Bank {
    bankName;
    location;
    accountNo;
    ifsc;
    interestRate

    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;

    }
    
}

const axis_bank = new Bank("AXIS Bank", "Kharadi Raod, Pune", "65874235987456", "AXIS000456", "12.75");
const sbi_bank = new Bank("SBI Bank", "Tilak Raod, Pune", "759836548975632", "SBIN00658", "10.99");
const icici_bank = new Bank("ICICI Bank", "Senapati Bapat Raod, Pune", "98563248951235", "ISIC000789",  "11.74");
const kotak_bank = new Bank("Kotak Bank", "Bhumkar Chowk, Pune", "652489752365478", "KOTK000546", "16.50");
const hdfck_bank = new Bank("HDFC Bank", "kWakad, Pune", "52478932547895", "HDFC000876", "13.50");
const panjab_bank = new Bank("Panjab Nantional Bank", "Model Colony, Pune", "87593254789523", "PNJB0000248", "11.25")

const setOfBanks = new Set();
setOfBanks.add(axis_bank);
setOfBanks.add(sbi_bank);
setOfBanks.add(icici_bank);
setOfBanks.add(kotak_bank);
setOfBanks.add(hdfck_bank);
setOfBanks.add(panjab_bank);

for (const element of setOfBanks) {
    console.log(`Bank Namke is ${element.bankName}, and Bank address is: ${element.location}`);
    
}
