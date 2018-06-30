// création de la liste
var liste = [];
var saisie = "";

//cycle
while (saisie !== "stop") {
    var saisie = prompt("Saissiez votre mot !");

    if (saisie !== "stop") {
        liste.push(saisie);
    }
}

//Fin et phrase
console.log("Fin de la liste, la voici :");
liste.forEach(function (saisie) {
    console.log(saisie);
});