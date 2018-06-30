var motx = prompt("Entrez un mot");
var mot = motx.toLowerCase();

// Longueur du mot
console.log(mot.length);

// Minuscule
console.log(mot.toLowerCase());

// Majuscule
console.log(mot.toUpperCase());

// Main
var voy = 0;
var cons = 0;
var np = 0; //Nombre de lettre indentique (palindrome)
var motLeet = "";
var lettre = mot[i];

for (var i = 0; i < mot.length; i++) {
    nbreVoyelle ();
    inverser ();
    palind ();
    converirEnLeetSpeak ();
}
console.log("Nombre de voyelles : " + voy);
console.log("Nombre de consonnes : " + cons);

if (np === mot.length) {
    console.log(motx + " est un palindrome");
}

// Nombre de voyelles et consonnes
function nbreVoyelle () {
    if (mot[i] === "a" || mot[i] === "e" || mot[i] === "i" || mot[i] === "o" || mot[i] === "u" || mot[i] === "y") {       
        voy++;
    } 
    else {       
        cons++;
    }    
}

// Mot à l'envers
function inverser () {
    console.log(motx[mot.length -  (i + 1)]);
}

// Palindrome
function palind () {
    if (mot[i] === mot[mot.length - (i + 1)]) {
        np++; //Incrémante si lettres identiques
    }   
}

// Leet Speak
function converirEnLeetSpeak(mot) {
    motLeet = motLeet + trouverLettreLeet(mot[i]);
    return motLeet;
}

function trouverLettreLeet(lettre) {
    var lettreLeet = lettre;    
    switch (lettre) {
        case "a":
            lettreLeet = "4";
            break;
        case "b":
            lettreLeet = "8";
            break;
        case "e":
            lettreLeet = "3";
            break;
        case "l":
            lettreLeet = "1";
            break;
        case "o":
            lettreLeet = "0";
            break;
        case "s":
            lettreLeet = "5";
            break;
    }
    return lettreLeet;
}
