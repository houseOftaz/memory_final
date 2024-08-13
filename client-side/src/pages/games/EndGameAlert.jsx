import RestartButton from "../../components/buttons/RestartButton";

// fonction pour afficher l'alerte de fin de partie
const EndGameAlert = ({ nbrCoups, handleRestart, isWon }) => {
  return (
    <div className="end-game-alert">
      {isWon ? (
        <p>Vous avez gagné ! {nbrCoups} coups !</p>
      ) : (
        <p>Vous avez perdu ! {nbrCoups} coups !</p>
      )}
      <RestartButton onRestart={handleRestart} />
    </div>
  );
};

export default EndGameAlert;
