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
var nombre = Number(prompt("Entrez un nombre entre 1 et 100 :"));

for (var i = 1; i <= 5; i++) {
	if (nombre === solution){
		console.log("Félicitation le chiffre mytère etait le " + nombre);
		break;
	}
	
	if (nombre < solution) {
		console.log(nombre + " est trop petit");

	} else {
		console.log(nombre + " est trop grand");
	}

	nombre = Number(prompt("Entrez un nombre entre 1 et 100 :")); 
	if (i == 5){
		console.log(" Vous avez perdu, le chiffre etait " + solution);
	}
}	