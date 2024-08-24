import { Link } from "react-router-dom";

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
    <form className="choose-nbr-crd-form" onSubmit={handleSubmit}>
      <h2>Choisissez le niveau</h2>
      <label htmlFor="easy">
        <input
          type="radio"
          id="easy"
          name="level"
          value="easy"
          checked={selectedLevel === "easy"}
          onChange={(event) => setSelectedLevel(event.target.value)}
        />
        Easy | Temps limite : 1 minute
      </label>
      <label htmlFor="medium">
        <input
          type="radio"
          id="medium"
          name="level"
          value="medium"
          checked={selectedLevel === "medium"}
          onChange={(event) => setSelectedLevel(event.target.value)}
        />
        Medium | Temps limite : 30 secondes
      </label>
      <label htmlFor="hard">
        <input
          type="radio"
          id="hard"
          name="level"
          value="hard"
          checked={selectedLevel === "hard"}
          onChange={(event) => setSelectedLevel(event.target.value)}
        />
        Hard | Temps limite : 15 secondes
      </label>
      <button className="start-btn" type="submit">
        Démarrer
      </button>
      <Link to="/" className="return-btn">
        Retour
      </Link>
    </form>
  );
};

export default ChooseChronoForm;
