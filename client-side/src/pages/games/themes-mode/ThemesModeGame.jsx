import { useState, useEffect, useContext } from "react";
import ThemesCard from "./ThemesCard";
import EndGameAlert from "../EndGameAlert";
import { CounterContext } from "../../../context/CounterContextProvider";
import LinkBtn from "../../../components/buttons/LinkBtn";

const ThemesModeGame = ({
  nbrCards,
  setDisplayChooseThemeForm,
  themeValue,
}) => {
  const [cards, setCards] = useState([]);
  const [matchedPair, setmatchedPair] = useState([]);
  const [nbrCoups, setNbrCoups] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isRestricted, setIsRestricted] = useState(false);

  const { count, increment, reset } = useContext(CounterContext);

  useEffect(() => {
    setIsGameOver(false);
    reset();

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

        const fetchCards = await response.json();
        const cardValues = Array.from(
          { length: nbrCards / 2 },
          (_, i) => fetchCards[i].alt
        );

        const shuffledCards = [...cardValues, ...cardValues]
          .sort(() => Math.random() - 0.5)
          .map((value, index) => ({ id: index, value, isFlipped: false }));
        setCards(shuffledCards);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCards();
  }, [nbrCards, themeValue]);

  const handleClick = (id) => {
    if (isRestricted) return;
    increment();

    const updatedCards = cards.map((card) => {
      if (card.id === id) {
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
      const createNewGame = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_BASE_URL_BACKEND}/server-side/game/games/`,
            {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                nbr_clics: count,
                name_package: themeValue,
              }),
            }
          );

          if (!response.ok) {
            throw new Error("front, fail to create new game");
          }
          const game = await response.json();
        } catch (error) {
          console.error(error);
        }
      };
      createNewGame();
      setIsGameOver(true);
    }
  }, [matchedPair, cards.length]);

  const handleRestart = () => {
    setIsGameOver(false);
    setCards([]);
    setmatchedPair([]);
    setNbrCoups(0);
    setDisplayChooseThemeForm(true);
    reset();
  };

  return (
    <div className="games-container">
      <h2 className="games-title">{themeValue} theme</h2>
      <section className="cards-container">
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

      <p className="clicks-counter">{count} clicks</p>
      <LinkBtn linkTo="/" label="Retour" className="test-mode-btn" />

      {isGameOver && <EndGameAlert handleRestart={handleRestart} />}
    </div>
  );
};

export default ThemesModeGame;
