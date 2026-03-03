let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;


let sousTotal = prix * quantite;
console.log("Sous-total :", sousTotal.toFixed(3), "MAD");


let promoValide = (codePromo ?? false) && estMembre;

let reduction = promoValide ? sousTotal * (reductionPourcentage / 100) : 0;
console.log("Réduction :", reduction.toFixed(3), "MAD");

let totalFinal = sousTotal - reduction;
console.log("Total final :", totalFinal.toFixed(3), "MAD");

let paiementAccepte = soldeCompte >= totalFinal;
console.log(paiementAccepte ? "Paiement accepté" : "Solde insuffisant");

let nouveauSolde = paiementAccepte 
    ? soldeCompte - totalFinal 
    : soldeCompte;

if (paiementAccepte) {
    console.log("Nouveau solde :", nouveauSolde.toFixed(3), "MAD");
}

console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit   :", nomProduit);
console.log("Quantité  :", quantite);
console.log("Prix unit.:", prix, "MAD");
console.log("Sous-total:", sousTotal.toFixed(3), "MAD");
console.log("Réduction :", reduction.toFixed(3), "MAD");
console.log("Total     :", totalFinal.toFixed(3), "MAD");
console.log("Statut    :", paiementAccepte ? "Paiement accepté" : "Solde insuffisant");
console.log("Solde     :", nouveauSolde.toFixed(3), "MAD");
console.log("=========================");