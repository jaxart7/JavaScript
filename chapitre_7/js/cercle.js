var r = Number(prompt("Entrez le rayon d'un cercle :"));


// TODO : ajoutez ici la définition de l'objet cercle
var cercle = {
    perimetre: function () {
        p = 2 * Math.PI * r;
        return p;
    },
    aire: function () {
        a = Math.PI * r * r;
        return a;
    }
}
console.log("Son périmètre vaut " + cercle.perimetre());

console.log("Son aire vaut " + cercle.aire());