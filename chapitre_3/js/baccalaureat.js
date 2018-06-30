var note = Number(prompt("Entrez votre moyenne au Bac"));

if (note < 10) {
    console.log("recalé ahah");
} else if (note <= 12) {
    console.log("de justesse");
} else if (note > 12) {
    console.log("bravo");
}