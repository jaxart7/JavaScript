var choix = Number(prompt("Votre choix de nombre "));

for (var i = choix; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    } 
    else {
        console.log(i + " est impair");
    }
}