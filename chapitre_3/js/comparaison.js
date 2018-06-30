var nombre1 = Number(prompt("Entrez votre premier nombre."));
var nombre2 = Number(prompt("Entre votre deuxième nombre"));

if (nombre1 > nombre2) {
    console.log("Le 1er nombre est plus grand");
}
else if (nombre1 === nombre2) {
    console.log("Les 2 nombres sont égalités.");    
}
else if (nombre1 < nombre2) {
    console.log("Le 2nd nombre est plus grand");
}

