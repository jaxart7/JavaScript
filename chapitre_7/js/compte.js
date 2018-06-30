var compte = {
    titulaire: "Alex",
    solde: 0,

    crediter: function (credit) {
        this.solde = this.solde + credit;
    },

    debiter: function (debit) {
        this.solde = this.solde - debit;
    },

    decrire: function () {
        var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
        return description;
    }
};

console.log(compte.decrire());


// + 50E
var credit = Number(prompt("Montant du crédit : "));

compte.crediter(credit);

console.log(compte.decrire());

// - 30E
var debit = Number(prompt("Montant du débit : "));

compte.debiter(debit);

console.log(compte.decrire());