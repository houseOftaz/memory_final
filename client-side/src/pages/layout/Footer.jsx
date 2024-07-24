import { Link } from "react-router-dom";

const Footer = ({ linkTo, label, className }) => {
  return (
    <>
      <div className="footer-separator"></div>
      <Link to={linkTo} className={className}>
        {label}
      </Link>
    </>
  );
};

export default Footer;
