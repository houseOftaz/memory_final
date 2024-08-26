const RestartBtn = ({ onRestart }) => {
  const handleRestart = (url) => {
    const audio = new Audio(url);
    audio.play();
    onRestart();
  };

  return (
    <button onClick={handleRestart} className="restart-button">
      Relancer une partie
    </button>
  );
};

export default RestartBtn;
