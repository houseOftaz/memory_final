import LinkButton from "../../components/buttons/LinkButton";
import Footer from "../layout/Footer";

const HomeMenu = () => {
  const user = {};

  return (
    <nav className="home-menu">
      <LinkButton linkTo={"/Test-mode-game"} label={"Essayer le jeu"} />

      <LinkButton
        linkTo={"/randomGame"}
        label={"Partie aléatoire"}
        disabled={Object.keys(user).length === 0}
      />

      <LinkButton
        linkTo={"/chrono"}
        label={"Contre la montre"}
        disabled={Object.keys(user).length === 0}
      />

      <LinkButton
        linkTo={"/theme"}
        label={"Par thème"}
        disabled={Object.keys(user).length === 0}
      />

      <LinkButton
        linkTo={"/score"}
        label={"Scores"}
        disabled={Object.keys(user).length === 0}
      />

      <LinkButton linkTo={"/signup"} label={"M'inscrire"} />

      {Object.keys(user).length === 0 && (
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
