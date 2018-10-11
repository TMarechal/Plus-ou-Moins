var Random = nb_random(0, 101);
var SaisieN;
var Compteur = 0;
var ButtonV = document.getElementById('Valider');

function nb_random(min, max) {
    var Random = Math.random() * (max - min) + min;
    return Math.floor(Random);
}

console.log(Random);
ButtonV.addEventListener('click', Validation)
function Validation(e) {
    e.preventDefault();
    var SaisieN = document.getElementById('Saisie').value;
    if (SaisieN == Random) {
        alert('C est Gagné');
        return false;
    } else {
        if (SaisieN < Random) {
            alert('C est Plus');
        } else {
            alert('C est Moins');
        }

    }
}