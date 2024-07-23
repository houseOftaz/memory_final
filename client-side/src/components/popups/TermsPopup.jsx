
import ClickSound from "./ClickSound";

/**
 * 
 * @param {Object} props - comonents props 
 * @param {Function} props.onAccept - Function to call when terms are accepted
 */


const TermsPopup = ({ onAccept }) => {

    if (typeof onAccept !== 'function') {
        console.error('Expected `onAccept` to be a function');
        return null;
    }

    const handleAcceptClick = () => {
        ClickSound('/sounds/click.flac');
        onAccept();
    };

    return (
        <div className='terms-popup'>
            <div className='terms-content'>
                <h2>Terms and conditions</h2>
                <p>Pour continuer à jouer, vous  devez accepter nos conditions utilisation et notre politique de confidentialité.
                </p>
                <button onClick={handleAcceptClick} className='start-button '>Accept</button>
            </div>
        </div>
    )
}

export default TermsPopup;
