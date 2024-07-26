import { useContext } from "react";
import LinkButton from "../../components/buttons/LinkButton";
import Footer from "../layout/Footer";
import { SessionContext } from "../../context/SessionContextProvider";

const HomeMenu = () => {
  const { session } = useContext(SessionContext);

  return (
    <nav className="home-page">
      <LinkButton linkTo={"/Test-mode-game"} label={"Essayer le jeu"} />

      <LinkButton
        linkTo={"/randomGame"}
        label={"Partie aléatoire"}
        disabled={!session}
      />

      <LinkButton
        linkTo={"/chrono"}
        label={"Contre la montre"}
        disabled={!session}
      />

      <LinkButton linkTo={"/theme"} label={"Par thème"} disabled={!session} />

      <LinkButton linkTo={"/score"} label={"Scores"} disabled={!session} />

      <LinkButton linkTo={"/signup"} label={"M'inscrire"} />

      {!session && (
        <p>
          Vous devez vous inscrire pour utiliser toutes les fonctionnalités du
          jeu.
        </p>
      )}

      <Footer linkTo={"/login"} label={"login"} className={"link-button"} />
    </nav>
  );
};

export default HomeMenu;
