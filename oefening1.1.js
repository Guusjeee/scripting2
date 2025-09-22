
class person {
    constructor(studentenNaam, leerjaar, aantallesuren, aantalVakken) {
        this.studentenNaam = studentenNaam;
        this.leerjaar = leerjaar;
        this.aantallesuren = aantallesuren;
        this.aantalVakken = aantalVakken;
    }

    groet(){
        console.log (`Hallo, mijn naam is ${this.studentenNaam} ik zit in leerjaar ${this.leerjaar} 
        ik heb ${this.aantalVakken} lessen dat zijn ${this.aantallesuren} lesuren in de week`)
    }
};


let person1 = new person ("Guusje" , "2" , "32" , "8")
person1.groet()