const Card = ({ value, themeValue = "", onClick, isFlipped }) => {
  return (
    <div
      className={`card ${isFlipped ? "clicked-carte" : ""}`}
      onClick={onClick}
      data-value={value}
      style={{
        backgroundImage: themeValue
          ? `url('/images/${themeValue}/${value})`
          : undefined,
      }}
    >
      {isFlipped && !themeValue && <h2>{value}</h2>}
      {isFlipped && themeValue && (
        <img src={`/images/${themeValue}/${value}`} />
      )}
    </div>
  );
};

export default Card;
