var rep1 = "oui";
var rep2 = "non";
var i = prompt("quel est votre texte ?");
while ((i !== rep1) && (i !== rep2)) {
    i = prompt("quel est votre texte ?");
}
console.log("Perdu");