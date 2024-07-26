import { useState, useContext } from "react";
import LinkButton from "../../components/buttons/LinkButton";
import { SessionContext } from "../../context/SessionContextProvider";

//
const Register = () => {
  const { session, setSession } = useContext(SessionContext);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [showSubmitFormPopup, setShowSubmitFormPopup] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL_BACKEND}/server-side/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: "include",
        }
      );
      if (response.ok) {
        const formData = await response.json();
        setSession(formData);
        setShowSubmitFormPopup(true);
        setError(null);
      } else {
        setShowSubmitFormPopup(false);
        setError("Problème de connexion");
        throw new Error("Problème de connexion");
      }
    } catch (error) {
      console.log("Erreur lors de la soumission du formulaire", error);
      setShowSubmitFormPopup(false);
      setError("Problème de connexion");
    }
  };

  return (
    <div className="form-container">
      <h2>Inscription</h2>

      <form>
        {" "}
        {/* ohtmlFor ===label arround */}
        <label className="register-form-group" htmlFor="firstname">
          Prénom :
          <input
            type="text"
            value={formData.firstname}
            name="firstname"
            id="firstname"
            autoComplete="firstname"
            onChange={handleChange}
            required
          />
          {formData.firstname < 4 && (
            <p>Le prénom doit faire minimum 4 caractères</p>
          )}
        </label>
        <label className="register-form-group" htmlFor="lastname">
          Nom :
          <input
            type="text"
            value={formData.lastname}
            name="lastname"
            id="lastname"
            autoComplete="lastname"
            onChange={handleChange}
            required
          />
          {formData.lastname < 4 && (
            <p>Le nom de famille doit faire minimum 4 caractères</p>
          )}
        </label>
        <label className="register-form-group" htmlFor="email">
          Email :
          <input
            type="email"
            value={formData.email}
            name="email"
            id="email"
            placeholder="email@example.com"
            autoComplete="email@example.com"
            onChange={handleChange}
            required
          />
          {formData.email < 4 && <p>email doit faire minimum 4 caractères</p>}
        </label>
        <label className="register-form-group" htmlFor="password">
          Mot de passe :
          <input
            type="password"
            value={formData.password}
            name="password"
            id="password"
            autoComplete="new-password"
            onChange={handleChange}
            required
          />
          {formData.password < 4 && (
            <p>Le mot de passe doit faire minimum 4 caractères</p>
          )}
        </label>
        <LinkButton
          className="register-btn"
          linkTo={"/"}
          label={"Valider"}
          testClick={handleSubmit}
        />
      </form>
      {showSubmitFormPopup && (
        <p>Données soumises expréssement avec succès tant attendu!</p>
      )}
      {error && <p>{error}</p>}
      {session && (
        <p>
          Vous êtes connecté en tant que {session.firstname} {session.lastname}
        </p>
      )}
    </div>
  );
};

export default Register;
