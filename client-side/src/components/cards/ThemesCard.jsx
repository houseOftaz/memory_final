const ThemesCard = ({ value, themeValue = "", onClick, isFlipped }) => {
  return (
    <div
      className={`themes-card ${isFlipped ? "themes-clicked-card" : ""}`}
      onClick={onClick}
      data-value={value}
      style={{
        backgroundImage: !isFlipped
          ? `url("/images/back-cards/back-${themeValue}.webp")`
          : `url("/images/${themeValue}/${value}.webp")`,
      }}
    ></div>
  );
};

export default ThemesCard;
