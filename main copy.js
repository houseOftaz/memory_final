// si la partie est terminée, affiche une modale pour dire la partie est
// terminée en x coup et clicker sur ok pour relancer la partie


const nbrMoves = 0
// ajout d'une fonction pour verifier si la partie est finie
const endGame = () => {
    const allCards = document.querySelectorAll('.card')
    const visibleCards = document.querySelectorAll(".clicked-carte")
    if (visibleCards.length === allCards.length) {
        alert(`Congrats, you win in : {nbrCoups} coups`)
        location.reload()
    }
}

const clickCard = (card) => {

    // quitte la fonction si on a deja 2 cartes visibles
    if (document.querySelectorAll('.clicked-carte').length >= 2) {
        return
    }

    // sors de la fonction si la valeur est deja visible
    if(card.innerHTML != "") {
        return
    }

    // récupère la valeur de la carte clickée
    const valeurCarte = card.dataset.valeur
    // création d'un element pour afficher la valeur de la carte
    const insertValeurCarte = document.createElement('h2')
    // maj l'affichage de la carte pour afficher
    insertValeurCarte.textContent = valeurCarte

    // add valeur de la carte à la carte
    card.appendChild(insertValeurCarte)
    card.classList.add('clicked-carte')

    nbrMoves++

    // si la paire retournée est cartes égales -> enlève la class clicked-carte
    const returnedCards = document.querySelectorAll('.clicked-carte')
    if ( returnedCards.length >= 2 && returnedCards[0].innerHTML == returnedCards[1].innerHTML) {
        returnedCards[0].classList.remove('clicked-carte')
        returnedCards[1].classList.remove('clicked-carte')
    }

    // utilisation de setTimout pour supprimer la valeur et la couleur après 3 sec
    const displayValeurTime = () => {

        const allClickedCards = document.querySelectorAll('.clicked-carte')
        for (let i=0; i<allClickedCards.length; i++) {
            const actuelCard = allClickedCards[i]
            actuelCard.innerHTML = ""
            actuelCard.classList.remove('clicked-carte')
        }
    }

    if (document.querySelectorAll('.clicked-carte').length >=2) {
        setTimeout(displayValeurTime, 3000)
    }
}

const tireNbrRandom = (max) => {
    let nbr = Math.floor(Math.random() * max)
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
                clickCard(event.target)
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
 