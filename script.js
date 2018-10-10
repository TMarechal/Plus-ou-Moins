var Random = nb_random(0, 101);
var SaisieN;
var Compteur;
var ButtonV = document.getElementById('Valider');

function nb_random(min, max) {
    var Random = Math.random() * (max - min) + min;
    return Math.floor(Random);
}

console.log(Random);
ButtonV.addEventListener('click', Validation)
function Validation() {
    var Random = nb_random(0, 101);
    var SaisieN = document.getElementById('Saisie').value;
    if (SaisieN == Random) {
        alert('Gagné');
        return false;
    }
    else if (SaisieN < Random) {
        Compteur= Compteur+1;
        alert('Plus grand');
    }
    if (SaisieN > Random) {
        Compteur= Compteur+1;
        alert('Plus petit');
    }

}