console.log(`===========5 objects from Vehicle class================`);

class vehicle {
   
    constructor(mfgOfName, model, price, color, seatingCapcity, wheels){
        this.mfgOfName = mfgOfName;
        this.model = model;
        this.price = price;
        this.color = color;
        this.seatCapcity = seatingCapcity;
        this.wheels = wheels

    }


}


const marutiSuzuki = new vehicle ("Maruti Suzuki", "Ertigca", "13L", "white", "7", "Alloy");
const Hyundai = new vehicle ("Hyundai", "Creata", "18L", "silver", "5", "Disc Alloy");
const Honda = new vehicle ("Honda", "HondaCity", "18L", "Black", "5", "Alloy");
const Toyota = new vehicle ("Toyota", "Inova", "25L", "White", "7", "Disc");
const Mahindra = new vehicle ("Mahindra", "XUV300", "12L", "Black", "7", "Disc");



console.log(marutiSuzuki);
console.log(Hyundai);
console.log(Honda);
console.log(Toyota);
console.log(`===========Added in to Array and Traverse using for of loop ================`);
const arrayOfvehicle = [ marutiSuzuki, Hyundai, Honda, Toyota, Mahindra  ]

for (const element of arrayOfvehicle) {
    console.log(`Vehicle Details: ${element.mfgOfName}, ${element.model}, ${element.price}, ${element.color},  ${element.seatingCapcity}, ${element.wheels} `)
    
}

console.log(`===========class for College================`);

class College {
    collegeName
    address
    principle
    collegeRank

    constructor(collegeName, address, principle, collegeRank ){
            this.collegeName = collegeName;
            this.address = address;
            this.principle = principle;
            this.collegeRank = collegeRank;

        }
    }

    const dyPatil = new College ("D Y Patil", "Akurdi", "Lalit Kumar Wadhwa", "2" );
    const spCollege = new College ("S. P College", "Tilak Raod, Pune", "Sunil Wamanrao Gaikwad	", "4" );
    const fcCollege = new College ("F. C College", "FC Raod, Pune", "Dr. Anita Sehrawat	", "1" );
    const sinhgadCollege = new College ("Sinhgad College", "Wadgaon, Pune", "Dr. Magan P", "3" );
    console.log(dyPatil);
    console.log(spCollege);
    console.log(fcCollege);
    console.log(sinhgadCollege);


