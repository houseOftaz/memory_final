import { useState } from "react";
import { Link } from "react-router-dom";

const ChooseChronoForm = ({ onLevelSelect }) => {
  const [selectedLevel, setSelectedLevel] = useState("facile");

  const handleSubmit = (event) => {
    event.preventDefault();
    let timeLimit;
    switch (selectedLevel) {
      case "facile":
        timeLimit = 60;
        break;
      case "moyen":
        timeLimit = 30;
        break;
      case "difficile":
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
      <label htmlFor="facile">
        <input
          type="radio"
          id="facile"
          name="level"
          value="facile"
          checked={selectedLevel === "facile"}
          onChange={(event) => setSelectedLevel(event.target.value)}
        />
        Facile | Temps limite : 1 minute
      </label>
      <label htmlFor="moyen">
        <input
          type="radio"
          id="moyen"
          name="level"
          value="moyen"
          checked={selectedLevel === "moyen"}
          onChange={(event) => setSelectedLevel(event.target.value)}
        />
        Moyen | Temps limite : 30 secondes
      </label>
      <label htmlFor="difficile">
        <input
          type="radio"
          id="difficile"
          name="level"
          value="difficile"
          checked={selectedLevel === "difficile"}
          onChange={(event) => setSelectedLevel(event.target.value)}
        />
        Difficile | Temps limite : 15 secondes
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
