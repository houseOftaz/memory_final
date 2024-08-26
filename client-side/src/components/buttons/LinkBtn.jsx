import { Link } from "react-router-dom";

const LinkBtn = ({ linkTo, onClickUserAction, disabled, label, className }) => {
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
      className={`link-button ${
        disabled ? "disabled-btn " + className : className
      }`}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      {label}
    </Link>
  );
};

export default LinkBtn;
