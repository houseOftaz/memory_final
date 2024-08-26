const Card = ({ value, onClick, isFlipped }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div
      className={`card ${isFlipped ? "clicked-card" : ""}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      data-value={value}
      aria-pressed={isFlipped}
      aria-label={value}
    >
      {isFlipped && <h2>{value}</h2>}
    </div>
  );
};

export default Card;
