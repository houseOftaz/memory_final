import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { SessionContext } from "../../context/SessionContextProvider";
import LinkButton from "../../components/buttons/LinkButton";
import Footer from "../layout/Footer";

const HomePage = () => {
  const { session, setSession } = useContext(SessionContext);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log("params", searchParams);
  if (searchParams.get("sucessLogin")) {
    setTimeout(() => {
      setSearchParams({});
    }, 3000);
  }

  const handleLogout = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL_BACKEND}/server-side/auth/logout`,
      {
        credentials: "include", // c'est lui qui envoie ou non le cookie
      }
    );
    if (response.ok) {
      // la reponse contient un code HTTP
      const data = await response.json(); // response contient un objet
      setSession({});
    } else {
      console.log("Erreur lors de la déconnexion");
    }
  };

  return (
    <nav className="home-page">
      {searchParams.get("sucessLogin") && (
        <p>Vous êtes connecté en tant que {session?.user?.firstname}</p>
      )}

      <LinkButton linkTo={"/test-mode"} label={"Essayer le jeu"} />

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
        linkTo={"/themes"}
        label={"Par thème"}
        disabled={!session?.user?.email}
      />

      <LinkButton
        linkTo={"/classement"}
        label={"classement"}
        disabled={!session?.user?.email}
      />

      <LinkButton
        linkTo={!session?.user?.email ? "/register" : "/"}
        label={!session?.user?.email ? "M'inscrire" : "Se déconnecter"}
        onClickUserAction={!session?.user?.email ? null : handleLogout}
      />

      {!session?.user?.email && (
        <p>
          Vous devez vous inscrire pour utiliser toutes les fonctionnalités du
          jeu.
        </p>
      )}
      <Footer />
    </nav>
  );
};

export default HomePage;
