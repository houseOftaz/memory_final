import { useState } from "react";

const ChooseThemeForm = ({ onStart }) => {
  const [formValue, setFormValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setFormValue(e.target.value); // maj la valeur saisie
  };

  const handleInputSubmit = (e) => {
    e.preventDefault(); // empêche le reload de la page
    const num = parseInt(formValue, 10); // conversion de la valeur saisie en entier
    if (!isNaN(num) && num >= 2 && num <= 10) {
      // vérification que la valeur saisie est un entier et > 2 et < 10
      setErrorMessage(""); // désactive le message d'erreur
      onStart(num); // appel de la fonction startGame avec la valeur saisie
    } else {
      setErrorMessage("Il faut choisir un thème");
    }
  };

  return (
    <form
      className="choose-theme"
      onSubmit={handleInputSubmit}
      aria-labelledby="choose-theme-form-title"
    >
      <label htmlFor="nbrCards" id="form-title">
        Choisi un nombre de cartes :
      </label>

      <input
        type="number"
        name="nbrCards"
        id="nbrCards"
        value={formValue}
        onChange={handleInputChange}
        min={2}
        max={10}
        step={2}
        required
      />

      <label htmlFor="theme" id="form-title">
        Choisi un thème :
        <select
          name="theme"
          id="theme"
          value={formValue}
          onChange={handleInputChange}
        >
          <option>Animaux</option>
          <option>Super heros</option>
          <option>Monuments</option>
        </select>
      </label>
      <button className="choose-theme-form-btn" type="submit">
        Lancer la partie
      </button>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default ChooseThemeForm;
