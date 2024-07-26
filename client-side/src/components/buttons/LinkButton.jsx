import { Link, useNavigate } from "react-router-dom";

function LinkButton({ linkTo, testClick, disabled, label }) {
  const navigate = useNavigate();
  const clickSound = (url) => {
    const audio = new Audio(url);
    audio.play();
  };

  const handleClick = async (e) => {
    clickSound("/sounds/click.flac");
    if (testClick) {
      await testClick(e);
      navigate(linkTo);
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
