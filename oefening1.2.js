class person {
    constructor(studentenNaam, leerjaar, aantallesuren, aantalVakken) {
        this.studentenNaam = studentenNaam;
        this.leerjaar = leerjaar;
        this.aantallesuren = aantallesuren;
        this.aantalVakken = aantalVakken;
    }

    groet(){
        console.log (`Hallo, mijn naam is ${this.studentenNaam} ik zit in leerjaar ${this.leerjaar} 
        ik heb ${this.aantalVakken} vakken dat zijn ${this.aantallesuren} lesuren in de week`)
    }
};


const personen = [
    new person ("Guusje", "2", "8", "32"),
    new person ("Soufyan", "1", "200", "1132"),
    new person ("Fabian", "2", "8", "32"),
    new person ("Salah", "2", "8", "32"),
    new person ("Nassim", "2", "8", "32")

]

personen.forEach(persoon => {
    persoon.groet()
});
