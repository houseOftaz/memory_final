
import { Link } from 'react-router-dom';

function LinkButton({linkTo, label, disabled}) {

    const clickSound = (url) => {
        const audio = new Audio(url);
        audio.play();
    }

  return (
    <Link to={linkTo} onClick={clickSound}
                      className={`link-button ${disabled? 'disabled-btn': ''}`}>
                        {label}
    </Link>
  );
}

export default LinkButton;
