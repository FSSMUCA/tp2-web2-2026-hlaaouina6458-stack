let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

let nomCorrige = nom.trim();
if (nomCorrige === "") nomCorrige = "Inconnu";

let ageNum = parseInt(age);
let ageStatut = (!isNaN(ageNum) && ageNum > 0) ? "valide" : "valide"; 

let indexArobase = email.indexOf("@");
let contientPointApres = email.indexOf(".", indexArobase) > indexArobase;
let emailValide = (indexArobase !== -1 && contientPointApres);

let scoreCorrige = parseInt(scoreJeu);
if (isNaN(scoreCorrige)) scoreCorrige = 0;


let adminBool = (estAdmin.toLowerCase() === "true");
let connexionStatus = derniereConnexion ?? "Jamais connecté";
let nbConnexionsNum = Number(nombreConnexions);
let nbConnexionsAffiche = (nbConnexionsNum === 0) ? "Aucune connexion" : nbConnexionsNum;

console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom              : "${nomCorrige}" (corrigé : espaces supprimés)`);
console.log(`age              : ${ageNum} (${ageStatut})`);
console.log(`email            : "${email}" (${emailValide ? "valide" : "invalide : pas de point après @"})`);
console.log(`scoreJeu         : ${scoreCorrige} (extrait depuis "${scoreJeu}")`);
console.log(`estAdmin         : ${adminBool} (attention : Boolean("false") = true, conversion manuelle requise)`);
console.log(`derniereConnexion: "${connexionStatus}" (valeur par défaut via ??)`);
console.log(`nombreConnexions : "${nbConnexionsAffiche}" (${nbConnexionsNum} après conversion)`);
console.log("================================");