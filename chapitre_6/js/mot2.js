//Main
var saisie = prompt("Entre ton mot !");
var motbrut = saisie;
var motmin = motbrut.toLowerCase();
var motmaj = motbrut.toUpperCase();
var compteurVoy = 0;
console.log(motmin);
console.log(motmaj);

console.log("Ton mot contient " + motbrut.length + " caractère(s).");//Nombre lettres

enVoyelle ();//Voyelles et consonnes
console.log ("Ton mot contient " + compteurVoy + " voyelle(s), et " +(motbrut.length - compteurVoy) + " consonne(s)."); 

var motInverse = inverser(motbrut); //inverser
console.log("Ton mot à l'enveres : " + motInverse);

if (motInverse.toLowerCase() === motmin) { //Palindrome
    console.log("Ton mot est un palindrome !");
} else {
    console.log("Ton mot n'est pas un palindrome.");
}

var motLeet = convertirEnLeetSpeak(motmin); //mot Leet Speak
console.log("S'écrit en Leet Speak : " + motLeet);



//Nombre de Voyelles
function enVoyelle(motmin) { 
    var motmin = motbrut.toLowerCase();
    for (var i = 0; i < motmin.length; i++) {
        var lettre = motmin[i];
        if (lettre === "a" || lettre === "e" || lettre === "i" || lettre === "o" || lettre === "u" || lettre === "y") {
            compteurVoy++;
        }
    }    
}

//Inverser
function inverser(motbrut) {
    var motbrut = saisie;   
    var motInverse = ""; 
    for (var i = 0; i < motmin.length; i++) {
        motInverse = motbrut[i] + motInverse;
    }      
    return motInverse;
}

//Leet speak
function convertirEnLeetSpeak(motmin) {
    var motLeet = "";
    var motmin = saisie.toLowerCase();
    for (var i = 0; i < motmin.length; i++) {
        var lettre = motmin[i];
        switch (lettre) {
            case "a":
                lettre = "4";
                break;
            case "b":
                lettre = "8";
                break;
            case "e":
                lettre = "3";
                break;
            case "l":
                lettre = "1";
                break;
            case "o":
                lettre = "0";
                break;
            case "s":
                lettre = "5";
                break;
        }
      motLeet = motLeet + lettre;
    }
    return motLeet;
}
