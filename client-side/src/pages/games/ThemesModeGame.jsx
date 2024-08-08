import { useState, useEffect, useContext } from "react";
import ThemesCard from "../../components/cards/ThemesCard";
import EndGameAlert from "../../components/popups/EndGameAlert";
import { CounterContext } from "../../context/CounterContextProvider";

const ThemesModeGame = ({
  nbrCards,
  setDisplayChooseNbrCardForm,
  themeValue,
}) => {
  const [cards, setCards] = useState([]); // état pour les cartes
  const [matchedPair, setmatchedPair] = useState([]); // état pour les cartes déjà piquées
  const [nbrCoups, setNbrCoups] = useState(0); // nombre de coups effectués
  const [isGameOver, setIsGameOver] = useState(false); // état pour la fin de la partie
  const [isRestricted, setIsRestricted] = useState(false);

  const { count, increment, reset } = useContext(CounterContext);

  console.log("1", cards);

  useEffect(() => {
    // fonction pour lancer la partie
    setIsGameOver(false);
    reset();

    // recupere les cartes depuis le serveur
    const fetchCards = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BASE_URL_BACKEND
          }/server-side/game/themes/${themeValue}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (!response.ok) {
          throw new Error("HTTP error");
        }

        // recupere les cartes au format JSON
        const fetchCards = await response.json();
        // fonction pour générer les cartes
        const cardValues = Array.from(
          { length: nbrCards / 2 },
          (_, i) => fetchCards[i].alt
        );
        // CARD LISTE GENERATION
        const shuffledCards = [...cardValues, ...cardValues]
          .sort(() => Math.random() - 0.5) // tri aléatoire
          .map((value, index) => ({ id: index, value, isFlipped: false })); // création des objets cartes
        setCards(shuffledCards); // maj de l'état des cartes
      } catch (error) {
        console.error(error);
      }
    };

    fetchCards();
  }, [nbrCards, themeValue]);

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

    const flipped = updatedCards.filter((card) => {
      return (
        card.isFlipped &&
        !matchedPair.some((matchedCard) => matchedCard.id === card.id)
      );
    });
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
              if (
                card.isFlipped &&
                !matchedPair.some((matchedCard) => {
                  console.log(card, matchedCard);
                  return matchedCard.id === card.id;
                })
              ) {
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
      <h2>Theme Mode</h2>
      <section className="container-cards">
        {cards.map((card) => (
          <ThemesCard
            key={card.id}
            value={card.value}
            onClick={() => handleClick(card.id)}
            isFlipped={card.isFlipped}
            themeValue={themeValue}
          />
        ))}
      </section>
      <p>{count} clicks</p>
      <p>{nbrCoups} coups</p>

      {isGameOver && <EndGameAlert handleRestart={handleRestart} />}
    </>
  );
};

export default ThemesModeGame;
