import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LinkBtn from "../../components/buttons/LinkBtn";
import { SessionContext } from "../../context/SessionContextProvider";

const LoginPage = () => {
  const { setSession } = useContext(SessionContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // met a jour le formData avec les valeurs du champs
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL_BACKEND}/server-side/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // previens l'envoi de json avec le headers      body: JSON.stringify(formDat
        },
        body: JSON.stringify(formData), // convertit le formData en json
        credentials: "include",
      }
    );
    if (!response.ok) {
      setError("Problème de connexion");
      throw new Error("Problème de connexion");
    }
    const data = await response.json();
    setSession({ user: data.user });
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Connexion</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="email">
          Email :
          <input
            className="register-form-input"
            type="email"
            value={formData.email}
            name="email"
            id="email"
            placeholder="email@example.com"
            autoComplete="email"
            onChange={handleChange}
          />
        </label>

        <label className="form-label" htmlFor="email">
          Mot de passe :
          <input
            className="register-form-input"
            type="password"
            value={formData.password}
            name="password"
            id="password"
            placeholder="mot de passe"
            autoComplete="current-password"
            onChange={handleChange}
          />
        </label>

        <LinkBtn
          linkTo={"/?sucessLogin=true"} // search query params
          label={"Valider"}
          onClickUserAction={handleSubmit}
        />
        <LinkBtn linkTo="/" label="Retour" className="login-btn" />
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
