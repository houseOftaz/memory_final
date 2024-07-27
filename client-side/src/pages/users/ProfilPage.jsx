import { useState, useContext } from "react";
import LinkButton from "../../components/buttons/LinkButton";
import { SessionContext } from "../../context/SessionContextProvider";

function ProfilPage() {
  const { session } = useContext(SessionContext);
  const [profilData, setProfilData] = useState({
    avatar: null,
    firstname: session?.firstname || "",
    lastname: session?.lastname || "",
    email: session?.email || "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProfilData({
      ...profilData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      console.log(formData);
      formData.append("avatar", profilData.avatar);
      formData.append("firstname", profilData.firstname);
      formData.append("lastname", profilData.lastname);
      formData.append("email", profilData.email);
      formData.append("password", profilData.password);

      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL_BACKEND}/server-side/auth/update`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData || "Problème lors de la mise à jour");
        return;
      }

      const data = await response.json();
      setSuccessMessage(data.message);
      setSession(data.user);
    } catch (error) {
      setError("Problème de connexion");
    }
  };

  return (
    <div className="form-container">
      <h2>Mettre à jour votre profil</h2>
      <form onSubmit={handleSubmit}>
        <label className="register-form-group" htmlFor="firstname">
          Prénom :
          <input
            type="text"
            value={profilData.firstname}
            name="firstname"
            id="firstname"
            placeholder="Prénom"
            autoComplete="firstname"
            onChange={handleChange}
            required
          />
        </label>

        <label className="register-form-group" htmlFor="lastname">
          Nom :
          <input
            type="text"
            value={profilData.lastname}
            name="lastname"
            id="lastname"
            placeholder="Nom"
            autoComplete="lastname"
            onChange={handleChange}
            required
          />
        </label>

        <label className="register-form-group" htmlFor="birthdate">
          Date de naissance :
          <input
            type="number"
            value={profilData.birthdate}
            name="birthdate"
            id="birthdate"
            placeholder="Date de naissance"
            autoComplete="birthdate"
            onChange={handleChange}
            required
          />
        </label>

        <label className="register-form-group" htmlFor="email">
          Email :
          <input
            type="email"
            value={profilData.email}
            name="email"
            id="email"
            placeholder="email@example.com"
            autoComplete="email@example.com"
            onChange={handleChange}
            required
          />
        </label>

        <label className="register-form-group" htmlFor="password">
          Avatar :
          <input
            type="file"
            name="avatar"
            id="avatar"
            onChange={handleChange}
            accept="image/*"
          />
        </label>

        <LinkButton linkTo={"/"} label={"Valider"} onClick={handleSubmit} />
      </form>

      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      {session && (
        <p>
          Vous êtes connecté en tant que {session.firstname} {session.lastname}
        </p>
      )}
    </div>
  );
}

export default ProfilPage;
