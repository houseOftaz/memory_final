// si la partie est terminée, affiche une modale pour dire la partie est
// terminée en x coup et clicker sur ok pour relancer la partie

const nbrCoups = 0
// ajout d'une fonction pour verifier si la partie est finie
const finDePartie = () => {
const allCards = document.querySelectorAll('.card')
const visibleCards = document.querySelectorAll(".clicked-card")
if (visibleCards.length === allCards.length) {
alert(`Congrats, you win in : {nbrCoups} coups`)
location.reload()
}
}

const clickCarte = (carte) => {

    // quitte la fonction si on a deja 2 cartes visibles
    if (document.querySelectorAll('.clicked-card').length >= 2) {
        return
    }

    // sors de la fonction si la valeur est deja visible
    if(carte.innerHTML != "") {
        return
    }

    // récupère la valeur de la carte clickée
    const valeurCarte = carte.dataset.valeur
    // création d'un element pour afficher la valeur de la carte
    const insertValeurCarte = document.createElement('h2')
    // maj l'affichage de la carte pour afficher
    insertValeurCarte.textContent = valeurCarte

    // add valeur de la carte à la carte
    carte.appendChild(insertValeurCarte)
    carte.classList.add('clicked-card')

    // si la paire retournée est cartes égales -> enlève la class clicked-card
    const retunedCards = document.querySelectorAll('.clicked-card')
    if ( retunedCards.length >= 2 && retunedCards[0].innerHTML == retunedCards[1].innerHTML) {
        retunedCards[0].classList.remove('clicked-card')
        retunedCards[1].classList.remove('clicked-card')
    }

    // utilisation de setTimout pour supprimer la valeur et la couleur après 3 sec
    const displayValeurTime = () => {

        const allClickedCards = document.querySelectorAll('.clicked-card')
        for (let i=0; i<allClickedCards.length; i++) {
            const actuelCard = allClickedCards[i]
            actuelCard.innerHTML = ""
            actuelCard.classList.remove('clicked-card')
        }
    }

    if (document.querySelectorAll('.clicked-card').length >=2) {
        setTimeout(displayValeurTime, 3000)
    }

}

const tireNbrRandom = (max) => {
let nbr = Math.floor(Math.random() \* max)
return nbr
}

const creEtMelangeCarte = (nbr) => {
// génère les paires
let cards = []
for (let i=1; i<=nbr/2; i=i+1) {
for (let j=0; j<2; j=j+1) {

            // Génère 1 carte avec 1 carte de valeur i
            let newCard = document.createElement('div')
            newCard.classList.add('card')
            newCard.attributes['data-valeur'] = i
            newCard.dataset.valeur = i;
            cards.push(newCard)
            newCard.addEventListener('click', (event)=>{
                clickCarte(event.target)
            } )
        }
    }

    // mélange le tableau cards
    for (let i=0; i<1000; i++) {   // (let i=1000; i>0; i--)
        let indice1 = tireNbrRandom(nbr)
        let indice2 = tireNbrRandom(nbr)
        let intermed = cards[indice1]
        cards[indice1] = cards[indice2]
        cards[indice2] = intermed
    }

    // Ajouter toutes les cartes du tab ds .cards
    for (let i=0; i<cards.length; i++) {
        document.querySelector(".cards").appendChild( cards[i] )
    }

}

let nbrChoisi = prompt('Choisi un nombre de carte :')

creEtMelangeCarte(nbrChoisi)
