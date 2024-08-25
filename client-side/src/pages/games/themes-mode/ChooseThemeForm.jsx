import { useState } from "react";
import LinkButton from "../../../components/buttons/LinkButton";

const ChooseThemeForm = ({ onStart }) => {
  const [formValue, setFormValue] = useState({
    theme: "animals",
    nbrCards: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue, // met a jour le formData avec les valeurs du champs
      [name]: value,
    });
  };

  const handleInputSubmit = (e) => {
    e.preventDefault(); // empêche le reload de la page
    const num = parseInt(formValue.nbrCards, 10); // conversion de la valeur saisie en entier
    if (!isNaN(num) && num >= 2 && num <= 10 && formValue.theme !== "") {
      // vérification que la valeur saisie est un entier et > 2 et < 10
      setErrorMessage(""); // désactive le message d'erreur
      onStart(formValue); // appel de la fonction startGame avec la valeur saisie
    } else {
      setErrorMessage("Il faut choisir un thème");
    }
  };

  return (
    <form
      className="choose-form"
      onSubmit={handleInputSubmit}
      aria-labelledby="choose-form-title"
    >
      <label htmlFor="nbrCards" id="form-title" className="choose-form-title">
        Choisi un nombre de cartes :
      </label>

      <input
        className="choose-input"
        type="number"
        name="nbrCards"
        id="nbrCards"
        value={formValue.nbrCards}
        onChange={handleInputChange}
        min={2}
        max={10}
        step={2}
        required
      />

      <label htmlFor="theme" id="form-title" className="choose-form-title">
        Choisi un thème :
        <select
          name="theme"
          id="theme"
          value={formValue.theme}
          onChange={handleInputChange}
        >
          <option value="animals">Animaux</option>
          <option value="heros">Heros</option>
          <option value="monuments">Monuments</option>
        </select>
      </label>
      <button className="choose-form-btn" type="submit">
        Lancer la partie
      </button>
      <LinkButton linkTo="/" label="Retour" />

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default ChooseThemeForm;
