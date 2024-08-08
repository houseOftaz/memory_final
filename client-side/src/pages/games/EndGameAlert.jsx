import RestartButton from "../../components/buttons/RestartButton";

// fonction pour afficher l'alerte de fin de partie
const EndGameAlert = ({ nbrCoups, handleRestart }) => {
  return (
    <div className="end-game-alert">
      <h2>Congrats, you win in {nbrCoups} coups.</h2>
      <RestartButton onRestart={handleRestart} />
    </div>
  );
};

export default EndGameAlert;
