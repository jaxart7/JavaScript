var nombre = 0;
while ((nombre < 2) || (nombre > 9)) {
    nombre = Number(prompt("Entre votre nombre pour la table :"));
}

console.log("Voici la table de mutliplication de " + nombre);
var i= 1;
while (i<=10) {
    console.log(nombre + " x " + i + " = " + (nombre * i));
    i++;
}