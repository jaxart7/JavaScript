/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

//Bienvenue
console.log("Bienvenue dans le gestionnaire de contacts !");
accueil();

//Contacts
var Contact = {
    //Initialise le contact
    initContact: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    //Lister les contacts
    lister: function () {
        var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
        return description;
    }
}

// Fonction accueil
function accueil() {
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
}

//Création de la liste des contacts initiale
var contact1 = Object.create(Contact);
contact1.initContact("Nelsonne", "Mélodie");
var contact2 = Object.create(Contact);
contact2.initContact("Lévisse", "Carole");
var listeContacts = [contact1, contact2];

//Choix option 1 2 0
var choix = prompt("Choisissez une option :");

while (choix !== "0") {
    if (choix === "1") { //lister les contacts
        listeContacts.forEach(function (contact) {
            console.log(contact.lister());
        });
    }
    if (choix === "2") { //Ajouter un contact
        var nom = prompt("Entrez le nom du nouveau contact");
        var prenom = prompt("Entrez le prenom de nouveau contact :");
        var contact3 = Object.create(Contact);
        contact3.initContact(nom, prenom);
        listeContacts.push(contact3);
        console.log("Le nouveau contact a été ajouté");
    }
    // Nouvel accueil
    accueil();
    // Nouveau choix
    choix = prompt("Choisissez une option :");
}

console.log("Au revoir !"); //Fin du programme















