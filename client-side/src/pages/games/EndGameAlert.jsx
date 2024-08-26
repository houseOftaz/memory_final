import RestartBtn from "../../components/buttons/RestartBtn";

// fonction pour afficher l'alerte de fin de partie
const EndGameAlert = ({ nbrCoups, handleRestart, isWon }) => {
  return (
    <div className="end-game-alert">
      {isWon ? (
        <p>Vous avez gagné en {nbrCoups} coups !</p>
      ) : (
        <p>Perdu, essayez encore !</p>
      )}
      <RestartBtn onRestart={handleRestart} />
    </div>
  );
};

export default EndGameAlert;
