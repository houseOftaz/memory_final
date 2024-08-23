import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContext } from "../../../context/CounterContextProvider";
import Card from "./Card";
import EndGameAlert from "../EndGameAlert";

const TestModeGame = ({ nbrCards, setDisplayChooseNbrCardForm }) => {
  // état pour les cartes
  const [cards, setCards] = useState([]);
  // état pour les cartes déjà piquées
  const [matchedPair, setmatchedPair] = useState([]);
  // nombre de coups effectués
  const [nbrCoups, setNbrCoups] = useState(0);
  // état pour la fin de la partie
  const [isGameOver, setIsGameOver] = useState(false);
  const [isRestricted, setIsRestricted] = useState(false);

  const { count, increment, reset } = useContext(CounterContext);

  // fonction pour lancer la partie
  useEffect(() => {
    setIsGameOver(false);
    reset();
    // fonction pour générer les cartes
    // génération de la valeur des cartes
    const cardValues = Array.from({ length: nbrCards / 2 }, (_, i) => i + 1);
    // génération de la liste des cartes
    const shuffledCards = [...cardValues, ...cardValues]
      .sort(() => Math.random() - 0.5) // tri aléatoire
      .map((value, index) => ({ id: index, value, isFlipped: false })); // création des objets cartes
    setCards(shuffledCards); // maj de l'état des cartes
    //setNbrCards(nbrCards) // maj de l'état du nombre de cartes
  }, [nbrCards]);

  // fonction pour effectuer un coup
  const handleClick = (id) => {
    if (isRestricted) return;
    increment();
    // récupération des cartes piquées
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        // vérifi si la carte est piquée
        card.isFlipped = !card.isFlipped;
      }
      return card;
    });
    setCards(updatedCards);
    setIsGameOver(false);

    const flipped = updatedCards.filter(
      (card) => card.isFlipped && !matchedPair.includes(card)
    );
    if (flipped.length === 2) {
      setNbrCoups((prev) => prev + 1);
      if (flipped[0].value === flipped[1].value) {
        setmatchedPair((prev) => [...prev, ...flipped]);
      } else {
        setIsRestricted(true);
        setTimeout(() => {
          setIsRestricted(false);
          setCards((prevCards) =>
            prevCards.map((card) => {
              if (card.isFlipped && !matchedPair.includes(card)) {
                card.isFlipped = false;
              }
              return card;
            })
          );
        }, 1500);
      }
    }
  };

  useEffect(() => {
    if (matchedPair.length === cards.length && cards.length > 0) {
      setIsGameOver(true);
    }
  }, [matchedPair, cards.length]);

  const handleRestart = () => {
    setIsGameOver(false);
    setCards([]);
    setmatchedPair([]);
    setNbrCoups(0);
    setDisplayChooseNbrCardForm(true);
    reset();
  };

  return (
    <>
      <h2>Test Mode</h2>
      <section className="container-cards">
        {cards.map((card, index) => (
          <Card
            key={index}
            value={card.value}
            onClick={() => handleClick(card.id)}
            isFlipped={card.isFlipped}
          />
        ))}
      </section>
      <p>{count} clicks</p>
      <p>{nbrCoups} coups</p>
      <Link to="/" className="return-btn">
        Retour
      </Link>

      {isGameOver && <EndGameAlert handleRestart={handleRestart} />}
    </>
  );
};

export default TestModeGame;
