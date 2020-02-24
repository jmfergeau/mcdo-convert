function mcdoConvert() {
    // Prix basés sur ceux d'un big mac et d'une frite moyenne en février 2020
    var inputEuro = document.getElementById('inputEuro'),
        bigmacDisp = document.getElementById('bigmac'),
        friteDisp = document.getElementById('frite'),
        errorMsg = document.getElementById('errorMsg'),
        inputRes = document.getElementById('inputRes'),
        bigmac = 4.55,
        frite = 2.65,
        err;

    // Le garde-fou
    if (inputEuro.value == "" || isNaN(inputEuro.value) || inputEuro.value < 1) {
        errorMsg.classList.remove("d-none");
        return false;
    } else {
        errorMsg.classList.add("d-none");
    };

    // L'opération. On divise pour les bigmacs et on prend le modulo pour les frites, puis on arrondit avec toFixed.
    operation1 = inputEuro.value / bigmac;
    operation2 = inputEuro.value % frite;
    bigmacDisp.innerHTML = operation1.toFixed(0);
    friteDisp.innerHTML = operation2.toFixed(0);
    inputRes.innerHTML = inputEuro.value;
};
