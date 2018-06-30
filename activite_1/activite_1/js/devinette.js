/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var sens; //Réponse plus petite ou plus grande
var nombre = Number(prompt("Entre un nombre entre 1 et 100 :"));

while (nombre !== solution){
    if (nombre < solution) {
        console.log("Trop petit");
        sens = "plus grand";
    }
    if (nombre > solution) {
        console.log("Trop grand");
        sens = "plus petit";
    }
    console.log(nombre); // Voir ses anciennes propositions
    nombre = Number(prompt("Entre un nouveau nombre " + sens));    
}

console.log("Bien joué ! " + nombre + " était la bonne réponse."); // Fin du jeu
