console.log("class Bank & all properties inilized by using Constructor ");
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
    bankDetails(){
        console.log(`Bank Details ==> Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate} `);
        
    }
}

const axisBank = new Bank("AXIS Bank", "Kharadi Raod, Pune", "65874235987456", "AXIS000456", "12.75");
const sbiBank = new Bank("SBI Bank", "Tilak Raod, Pune", "759836548975632", "SBIN00658", "10.99");
const iciciBank = new Bank("ICICI Bank", "Senapati Bapat Raod, Pune", "98563248951235", "ISIC000789",  "11.74");
const kotakBank = new Bank("Kotak Bank", "Bhumkar Chowk, Pune", "652489752365478", "KOTK000546", "16.50");
const panjabBank = new Bank("Panjab Nantional Bank", "Model Colony, Pune", "87593254789523", "PNJB0000248", "11.25")

axisBank.bankDetails();
sbiBank.bankDetails();
iciciBank.bankDetails();
kotakBank.bankDetails();
panjabBank.bankDetails();

console.log("-------------------------------------------------------------------------------");
console.log("Objects of Banks");
console.log("");


const setOfBanks = new Set ();

setOfBanks.add(axisBank);
setOfBanks.add(sbiBank);
setOfBanks.add(iciciBank);
setOfBanks.add(kotakBank);
setOfBanks.add(panjabBank);

for (const bank of setOfBanks) {

    console.log(  bank);

   // console.log( bank.accountNo);
    
}



console.log("-------------------------------------------------------------------------------");
console.log("accountNo and value is object");
console.log("");


const mapOfBank = new Map();
mapOfBank.set("Axis", axisBank);
mapOfBank.set("SBI", sbiBank);
mapOfBank.set("ICICI", iciciBank);
mapOfBank.set("Kotak", kotakBank);
mapOfBank.set("Panjab", panjabBank);



const keysOfMap = mapOfBank.keys();

for (const key of keysOfMap ) {
    const element =  mapOfBank.get(key);
    const accresutl = element.accountNo;
    const bnkName = element.bankName;
    console.log("Account No", accresutl, "is value of", bnkName, "Account No.");

   // console.log(element.bankName, element.accountNo, element.interestRate);
    
}
console.log("-------------------------------------------------------------------------------");
console.log("Traverse the map, Log bankName, accountNo and interestRate for each object");
console.log("");



const keysOfMap2 = mapOfBank.keys();

for (const key of keysOfMap2 ) {
    const element =  mapOfBank.get(key);
       console.log(element.bankName, element.accountNo, element.interestRate);
    
}







