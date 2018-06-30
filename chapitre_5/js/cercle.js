function perimetre() {
    return (2 * rayon * Math.PI);
        
}

function aire () {
    return ( Math.PI * rayon * rayon);        
}

var rayon = Number(prompt("Entrez votre rayon :"));
console.log(perimetre(rayon));
console.log(aire(rayon));