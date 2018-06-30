var perso = {
    nom: "Jaxart",
    sante: 150,
    force: 25,
    xp: 0,
    
    decrire: function() {
        var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience.";
        return description;
    }
};

console.log(perso.decrire());

// blessé par une flèche
perso.sante = perso.sante - 20;

//bracelet de  force
perso.force = perso.force + 10;

// apprends une nouvelle compétence
perso.xp = perso.xp + 15;
console.log(perso.decrire());