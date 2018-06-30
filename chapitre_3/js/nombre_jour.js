var today = prompt("Quel mois est-on ?");

switch (today) {
    case "janvier":
        console.log("Il y a 31 jours au mois de " + today + ".");  
        break;
    case "mars":
        console.log("Il y a 31 jours au mois de " + today + ".");
        break;
    case "avril":
        console.log("Il y a 30 jours au mois ...");
        break;
    default:
        console.log("Je n'ai pas compris.");
    
}