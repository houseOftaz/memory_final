const ThemesCard = ({ value, themeValue = "", onClick, isFlipped }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div
      className={`themes-card ${isFlipped ? "themes-clicked-card" : ""}`}
      onClick={onClick}
      data-value={value}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      aria-pressed={isFlipped}
      aria-label={value}
      style={{
        backgroundImage: !isFlipped
          ? `url("/images/back-cards/back-${themeValue}.webp")`
          : `url("/images/${themeValue}/${value}.webp")`,
      }}
    ></div>
  );
};

export default ThemesCard;
