import { useContext } from "react";
import { SessionContext } from "../../context/SessionContextProvider";
import { Link } from "react-router-dom";

const Footer = () => {
  // session est un objet, il contient une clef user qui est null (loading)
  // ou objet vide si le user n'est pas connecté
  // un objet c'est une clef une valeur
  // un tableau c'est des valeur avec index [0.1.2.3.4]
  // session = {user: {email: "test@test.com"}}
  const { session } = useContext(SessionContext);

  return (
    <>
      <div className="footer-separator"></div>
      <Link
        to={!session?.user.email ? "/login" : "/profile"}
        className="link-button"
      >
        {!session?.user.email ? "Se connecter" : "profile"}
      </Link>
    </>
  );
};

export default Footer;
