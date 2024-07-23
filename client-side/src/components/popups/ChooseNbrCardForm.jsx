
import { useState } from "react";

const ChooseNbrCardForm = ({onStart}) => {

    // état pour stocker la valeur saisie
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // maj la valeur saisie
    };

    const handleInputSubmit = (e) => {
        e.preventDefault(); // empêche le reload de la page
        const num = parseInt(inputValue, 10); // conversion de la valeur saisie en entier
        if (!isNaN(num) && num >= 2 && num <= 10) { // vérification que la valeur saisie est un entier et > 2 et < 10
            setErrorMessage(''); // désactive le message d'erreur
            onStart(num); // appel de la fonction startGame avec la valeur saisie
        } else {
            setErrorMessage('Veuillez saisir un nombre entre 2 et 10');
        }
    };

    return (

        <form className="choose-nbr-crd-form" onSubmit={handleInputSubmit}>

            <label htmlFor="nbrCards">
                Choisi un nombre de cartes :
            </label>

            <input type="number"
                   name="nbrCards"
                   id="nbrCards"
                   value={inputValue}
                   onChange={handleInputChange} // appel de la fonction lors du changement de la valeur saisie
                   min={2}
                   max={10}
                   step={2}
                   required
            />

            <button className="choose-nbr-crd-form-btn" type="submit">Jouer</button>
            
            {errorMessage && <p className='error-message'>{errorMessage}</p>}

        </form>

    )
}

export default ChooseNbrCardForm;
