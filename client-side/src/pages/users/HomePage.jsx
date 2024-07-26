import { useContext } from "react";
import { SessionContext } from "../../context/SessionContextProvider";
import LinkButton from "../../components/buttons/LinkButton";
import Footer from "../layout/Footer";

const HomeMenu = () => {
  const { session } = useContext(SessionContext);
  console.log(session);

  return (
    <nav className="home-page">
      <LinkButton linkTo={"/Test-mode-game"} label={"Essayer le jeu"} />

      <LinkButton
        linkTo={"/randomGame"}
        label={"Partie aléatoire"}
        disabled={!session?.user?.email}
      />

      <LinkButton
        linkTo={"/chrono"}
        label={"Contre la montre"}
        disabled={!session?.user?.email}
      />

      <LinkButton
        linkTo={"/theme"}
        label={"Par thème"}
        disabled={!session?.user?.email}
      />

      <LinkButton
        linkTo={"/score"}
        label={"Scores"}
        disabled={!session?.user?.email}
      />

      <LinkButton linkTo={"/register"} label={"M'inscrire"} />

      {!session && (
        <p>
          Vous devez vous inscrire pour utiliser toutes les fonctionnalités du
          jeu.
        </p>
      )}

      <Footer linkTo={"/profile"} label={"profile"} className={"link-button"} />
    </nav>
  );
};

export default HomeMenu;
