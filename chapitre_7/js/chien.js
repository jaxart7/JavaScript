// TODO : ajoutez ici la définition de l'objet chien
var chien = {
    nom: "myloo",
    race: "croisé malinois",
    taille: 60,

    aboyer: function () {
        var aboie = "ouaf ouaf!!";
        return aboie;
    }
};


console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");

console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());