var Random = nb_random(0, 101);
var SaisieN;
var Compteur = 0;
var Pièces = document.getElementById('nbPieces');
var ButtonV = document.getElementById('Valider');
var ButtonNew = document.getElementById('NewGame');

console.log(Random);

ButtonNew.addEventListener('click', nb_random)

function nb_random(min, max) {
    var Random = Math.random() * (max - min) + min;
    return Math.floor(Random);
}
ButtonV.addEventListener('click', Validation)

function Validation(e) {
    e.preventDefault();
    var SaisieN = document.getElementById('Saisie').value;
    if (SaisieN == Random) {
        Compteur = Compteur + 1;
        alert('C est Gagné ! ' + 'Il y a ' + Random + ' pièces dans le bloc. ' + 'Vous avez utilisé ' + Compteur + ' vies');
        return false;
    }
    if (SaisieN == "") {
        alert('Attention, il faut rentrer un nombre');
    } else {
        if (SaisieN < Random) {
            Compteur = Compteur + 1;
            alert('C est Plus');
        } else {
            Compteur = Compteur + 1;
            alert('C est Moins');
        }
    }
}
ButtonV.addEventListener('click',Pièces)
function Pièces(){
    if (SaisieN == Random)
    {
        console.log('hey !!!');
        document.getElementById('nbPieces').innerText = random;
    }
}
document.addEventListener('keydown', Entrée)

function Entrée(e) {
    if (e.keyCode == 13)
        Validation(e);
}