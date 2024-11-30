import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { SessionContext } from "../../context/SessionContextProvider";
import LinkBtn from "../../components/buttons/LinkBtn";
import Footer from "../layout/Footer";

const HomePage = () => {
  const { session, setSession } = useContext(SessionContext);

  const [searchParams, setSearchParams] = useSearchParams();
  if (searchParams.get("successLogin")) {
    setTimeout(() => {
      setSearchParams({});
    }, 3000);
  }

  const handleLogout = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL_BACKEND}/server-side/auth/logout`,
      {
        credentials: "include",
      }
    );
    if (response.ok) {
      setSession({});
    } else {
      console.log("Erreur lors de la déconnexion");
    }
  };

  return (
    <nav className="home-page">
      {searchParams.get("successLogin") && (
        <p>Vous êtes connecté en tant que {session?.user?.firstname}</p>
      )}

      <div className="home-div-linkbtn">
        <LinkBtn linkTo={"/test-mode"} label={"Essayer le jeu"} />

        <LinkBtn
          linkTo={"/challenge"}
          label={"Défier un joueur"}
          disabled={!session?.user?.email}
        />

        <LinkBtn
          linkTo={"/chrono"}
          label={"Contre la montre"}
          disabled={!session?.user?.email}
        />

        <LinkBtn
          linkTo={"/themes"}
          label={"Par thème"}
          disabled={!session?.user?.email}
        />

        <LinkBtn
          linkTo={"/classement"}
          label={"classement"}
          disabled={!session?.user?.email}
        />

        <LinkBtn
          linkTo={!session?.user?.email ? "/register" : "/"}
          label={!session?.user?.email ? "M'inscrire" : "Se déconnecter"}
          onClickUserAction={!session?.user?.email ? null : handleLogout}
        />
      </div>

      {/* Bouton Admin (visible uniquement pour les admins) */}
      {session?.user?.role === "admin" && (
        <LinkBtn linkTo={"/admin"} label={"Admin"} />
      )}

      {!session?.user?.email && (
        <p className="info-text-register">
          Vous devez vous inscrire pour utiliser toutes les fonctionnalités du
          jeu.
        </p>
      )}
      <Footer />
    </nav>
  );
};

export default HomePage;
