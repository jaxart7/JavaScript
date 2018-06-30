var Film = {

    init: function (titre, annee, realisateur) {
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur;
    },

    decrire: function () {
        var desciption = this.titre + " (" + this.annee + ", " + this.realisateur + ")";
        return desciption;
    }

}

var film1 = Object.create(Film);
film1.init("Star Wars Rogue One", 2016, "Gareth Edwards");

var film2 = Object.create(Film);
film2.init("Star Wars : Le reveil de la force", 2015, "J. J. Abrams");

var film3 = Object.create(Film);
film3.init("Star Wars : les derniers Jedi", 2017, "Rian Johnson");


var films = [film1, film2, film3];

films.forEach(function (film) {
    console.log(film.decrire());
});