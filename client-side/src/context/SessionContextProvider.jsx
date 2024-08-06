import { createContext, useState, useEffect } from "react";

export const SessionContext = createContext({
  user: {
    firstname: "",
    lastname: "",
    email: "",
    avatar: "",
  },
});

// {children} est le children du provider dans l'app
const SessionContextProvider = ({ children }) => {
  const [session, setSession] = useState();

  useEffect(() => {
    // useEffect ne peut pas etre async directement
    // la fonction fetchData est un hook qui permet de mettre un effet de bord
    const fetchData = async () => {
      // appl à l'API pour obtenir les données de session de l'utilisateur
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL_BACKEND}/server-side/auth/me`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          credentials: "include",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setSession(data);
      } else {
        throw new Error("Problème de connexion");
      }
    };
    fetchData();
  }, []); // tableau vide signifie que le hook ne sera appelé qu'une seule fois après le 1er render
  // retourne le provider du contexte avec la valeur actuelle de session et la fonction setSession
  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
