import { Link } from "react-router-dom";

function LinkButton({ linkTo, onClick, disabled, label }) {
  const clickSound = (url) => {
    const audio = new Audio(url);
    audio.play();
  };

  const handleClick = async (e) => {
    if (onClick) {
      await onClick(e);
    }
    clickSound("/sounds/click.flac");
  };

  return (
    <Link
      to={linkTo}
      onClick={handleClick}
      className={`link-button ${disabled ? "disabled-btn" : ""}`}
    >
      {label}
    </Link>
  );
}

export default LinkButton;
