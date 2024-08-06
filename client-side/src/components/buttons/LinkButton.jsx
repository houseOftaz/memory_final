import { Link } from "react-router-dom";

function LinkButton({ linkTo, onClickUserAction, disabled, label }) {
  const clickSound = (url) => {
    const audio = new Audio(url);
    audio.play();
  };

  const handleClick = async (e) => {
    clickSound("/sounds/click.flac");
    if (onClickUserAction) {
      await onClickUserAction(e);
    }
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
