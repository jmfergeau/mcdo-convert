// Ces variables sont globales afin de s'en servir ailleurs sur la page
var bigmac = 4.65, // Prix basés sur ceux d'un big mac et d'une frite moyenne en décembre 2020
    frite = 2.65,
    prixBM = document.getElementById('prixBM'),
    prixF = document.getElementById('prixF');

// Affiche les prix originaux dans la section "Techniquement..."
prixBM.innerHTML = bigmac;
prixF.innerHTML = frite;

function mcdoConvert() {
    // Déclarations des éléments à modifier
    var inputEuro = document.getElementById('inputEuro'),
        errorMsg = document.getElementById('errorMsg'),
        resultHTML = document.getElementById('result');

    // Le garde-fou. Il ramène une erreur si le chiffre est trop élevé, trop bas ou pas un chiffre
    if (inputEuro.value == "" || isNaN(inputEuro.value) || inputEuro.value < 1 || inputEuro.value >= 9999999999 ) {
        // Affiche le bloc d'erreur et arrête le script
        errorMsg.classList.remove("d-none");
        return false;
    } else {
        // Si l'utilisateur a mis un bon chiffre après une erreur, on cache le message.
        errorMsg.classList.add("d-none");
    };

    // L'opération. On divise pour les bigmacs et on prend le modulo pour les frites, puis on arrondit avec toFixed.
    operation1 = inputEuro.value / bigmac;
    operation2 = inputEuro.value % frite;

    // On commence à écrire le résultat. On rapporte d'abord la somme donnée
    result = inputEuro.value + " € font<br/>";

    // Mise au pluriel des bigmacs
    if (operation1.toFixed(0) == 1){
        result = result + operation1.toFixed(0) + " Big Mac&trade; 🍔";
    } else {
        result = result + operation1.toFixed(0) + " Big Macs&trade; 🍔";
    };

    // Rajout des frites s'il y en a et mise au pluriel s'il faut.
    if (operation2.toFixed(0) != 0) {
        result = result + " et " + operation2.toFixed(0);
        if (operation2.toFixed(0) == 1) {
            result = result + " frite 🍟";
        } else {
            result = result + " frites 🍟";
        };  
    };

    // Renvoi de la réponse avec un ! pour conclure la réponse
    resultHTML.innerHTML = result + " !";
};

// Ceci fait que la touche entrée exécute le script au lieu de changer vainement de page
$(document).ready(function() {
    $('form input').keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        mcdoConvert();
      }
    });
  });