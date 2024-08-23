const Card = ({ value, onClick, isFlipped }) => {
  return (
    <div
      className={`card ${isFlipped ? "clicked-card" : ""}`}
      onClick={onClick}
      data-value={value}
      aria-label={value}
    >
      {isFlipped && <h2>{value}</h2>}
    </div>
  );
};

export default Card;
