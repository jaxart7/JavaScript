// TODO : écrire la fonction calculer()
function calculer(x, signe, y) {
    switch (signe) {
        case "+":
            return (x + y);
            break;
        case "-":
            return (x - y);
            break;
        case "*":
            return (x * y);
            break;
        case "/":
            return (x / y);
            break;
    }
}


console.log(calculer(4, "+", 6)); // Doit afficher 10

console.log(calculer(4, "-", 6)); // Doit afficher -2

console.log(calculer(2, "*", 0)); // Doit afficher 0

console.log(calculer(12, "/", 0)); // Doit afficher Infinity