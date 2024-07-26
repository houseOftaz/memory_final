import { createContext, useState, useEffect } from "react";

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [session, setSession] = useState();

  useEffect(() => {
    // ne peut pas etre async
    // un hook qui permet de mettre un effet de bord
    const fetchData = async () => {
      // je cré la fonction async et la stocke dans fetchData
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL_BACKEND}/server-side/auth/me`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
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
  }, []);
  // le return est fait avant le useEffect
  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
