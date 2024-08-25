import { Link } from "react-router-dom";

const LinkButton = ({
  linkTo,
  onClickUserAction,
  disabled,
  label,
  className,
}) => {
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
    >
      {label}
    </Link>
  );
};

export default LinkButton;
