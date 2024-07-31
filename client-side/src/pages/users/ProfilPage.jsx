import { useState, useContext, useEffect } from "react";
// import LinkButton from "../../components/buttons/LinkButton";
import { SessionContext } from "../../context/SessionContextProvider";

function ProfilPage() {
  const { session, setSession } = useContext(SessionContext);
  console.log("1 session", session);
  // état local pour les informations du profil
  const [userData, setUserData] = useState({
    firstname: session?.user?.firstname || "",
    lastname: session?.user?.lastname || "",
    email: session?.user?.email || "",
  });

  useEffect(() => {
    if (session?.user) {
      setUserData({
        firstname: session?.user?.firstname || "",
        lastname: session?.user?.lastname || "",
        email: session?.user?.email || "",
      });
    }
  }, [session]);

  const handleChange = (e) => {
    // récupère le nom et la valeur du champ
    const { name, value } = e.target;
    setUserData({
      ...userData,
      // met à jour le champ
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("avatar", e.target.avatar.files[0]);

    formData.append("data", JSON.stringify(userData));

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL_BACKEND}/server-side/auth/update`,
        {
          method: "PATCH",
          body: formData,
          credentials: "include",
        }
      );

      const result = await response.json();
      console.log("1", result);
      setSession({ user: userData });
      console.log("2", setSession, userData);
      alert("Profile mis à jour");
    } catch (error) {
      console.log(error);
      alert("Problème lors de la mise à jour");
    }
  };

  return (
    <div className="form-container">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label className="register-form-group" htmlFor="firstname">
          Prénom :
          <input
            type="text"
            value={userData.firstname}
            name="firstname"
            id="firstname"
            placeholder="Prénom"
            onChange={handleChange}
          />
        </label>

        <label className="register-form-group" htmlFor="lastname">
          Nom :
          <input
            type="text"
            value={userData.lastname}
            name="lastname"
            id="lastname"
            placeholder="Nom"
            onChange={handleChange}
          />
        </label>

        {/*
        <label className="register-form-group">
          Date de naissance :
          <input
            type="date"
            value={userData.birthdate}
            name="birthdate"
            id="birthdate"
            placeholder="Date de naissance"
            autoComplete="birthdate"
            onChange={handleChange}
          />
        </label>
          */}

        <label className="register-form-group" htmlFor="email">
          Email :
          <input
            type="email"
            value={userData.email}
            name="email"
            id="email"
            placeholder="email@example.com"
            autoComplete="email@example.com"
            onChange={handleChange}
          />
        </label>

        <label className="register-form-group" htmlFor="avatar">
          Avatar :
          <input type="file" name="avatar" id="avatar" />
        </label>
        {/** 
        <LinkButton linkTo={"/"} label={"Valider"} onClick={handleSubmit} />
        */}
        <button type="submit">Valider</button>
      </form>

      {session && (
        <p>
          Vous êtes connecté en tant que {session.user.firstname}{" "}
          {session.user.lastname}
        </p>
      )}
    </div>
  );
}

export default ProfilPage;
