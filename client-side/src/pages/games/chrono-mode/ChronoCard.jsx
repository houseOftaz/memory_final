const ChronoCard = ({ value, themeValue = "", onClick, isFlipped }) => {
  return (
    <div
      className={`card ${isFlipped ? "clicked-card" : ""}`}
      onClick={onClick}
      data-value={value}
      aria-label={value}
      role="button"
      style={{
        backgroundImage: !isFlipped
          ? `url("/images/back-cards/back-${themeValue}.webp")`
          : `url("/images/${themeValue}/${value}.webp")`,
      }}
    ></div>
  );
};

export default ChronoCard;
