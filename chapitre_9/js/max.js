var valeurs = [11, 3, 7, 2, 9, 10];
var plusGrand = valeurs[0];


for (i = 1; i < valeurs.length; i++) {
    
    if (valeurs[i] > plusGrand) {
        plusGrand = valeurs[i];
   
    }    
}


console.log("Le plus grand nombre de la liste est : " + plusGrand);