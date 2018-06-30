var mousquetaires = ["Athos", "Porthos", "Aramis"];

console.log("Voici les 3 mousquetaires :");
for (var i = 0; i < mousquetaires.length; i++) {
    console.log(mousquetaires[i]);
}

mousquetaires.push("D'Artagan");

console.log("A présent, ils sont quatres !");
mousquetaires.forEach(function (mousqutaire) {
    console.log(mousqutaire)
});
                     
                     