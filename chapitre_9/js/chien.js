var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    },    
    //Renvoie la desciption du chien
    decrire: function () {
        var desciption = this.nom + " est un " + this.race + " mesurant " + this.taille + " cm. Il aboie : " + this.aboyer(); 
        return desciption;
    }
};

//crée les chiens
var chien1 = Object.create(Chien);
chien1.init("Crokdur", "mâtin de Naples", 75);

var chien2 = Object.create(Chien);
chien2.init("Pupuce", "bichon", 22);

var chien3 = Object.create(Chien);
chien3.init("Médor", "labrador", 58);

// crée la liste
var chiens = [chien1, chien2, chien3];

//FIN
console.log("Le chenil héberge " + chiens.length + " chien(s) : ");

chiens.forEach(function(chien) {
    console.log(chien.decrire());
});
