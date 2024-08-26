import LinkBtn from "../../../components/buttons/LinkBtn";

const ChooseChronoForm = ({
  onLevelSelect,
  selectedLevel,
  setSelectedLevel,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let timeLimit;
    switch (selectedLevel) {
      case "easy":
        timeLimit = 60;
        break;
      case "medium":
        timeLimit = 30;
        break;
      case "hard":
        timeLimit = 15;
        break;
      default:
        timeLimit = 60;
    }
    onLevelSelect(selectedLevel, timeLimit);
  };

  return (
    <form className="choose-form" onSubmit={handleSubmit}>
      <h2>Choisissez le niveau</h2>
      <div className="custom-radio-group">
        <label className="custom-radio-container" htmlFor="easy">
          <input
            className="chrono-choose-input"
            type="radio"
            id="easy"
            name="level"
            value="easy"
            checked={selectedLevel === "easy"}
            onChange={(event) => setSelectedLevel(event.target.value)}
          />
          Easy | Temps limite : 1 minute
        </label>
        <label className="custom-radio-container" htmlFor="medium">
          <input
            className="chrono-choose-input"
            type="radio"
            id="medium"
            name="level"
            value="medium"
            checked={selectedLevel === "medium"}
            onChange={(event) => setSelectedLevel(event.target.value)}
          />
          Medium | Temps limite : 30 secondes
        </label>
        <label className="custom-radio-container" htmlFor="hard">
          <input
            className="chrono-choose-input"
            type="radio"
            id="hard"
            name="level"
            value="hard"
            checked={selectedLevel === "hard"}
            onChange={(event) => setSelectedLevel(event.target.value)}
          />
          Hard | Temps limite : 15 secondes
        </label>
      </div>
      <button className="start-btn" type="submit">
        Démarrer
      </button>
      <LinkBtn linkTo="/" label="Retour" />
    </form>
  );
};

export default ChooseChronoForm;
