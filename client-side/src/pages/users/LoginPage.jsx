import { useState } from "react";
import LinkButton from "../../components/buttons/LinkButton";
import { SessionContext } from "../../context/SessionContextProvider";
import { useContext } from "react";

function LoginPage() {
  const { setSession } = useContext(SessionContext);

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
  };

  return (
    <div className="form-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <label className="register-form-group" htmlFor="email">
          Email :
          <input
            type="email"
            value={formData.email}
            name="email"
            id="email"
            placeholder="email@example.com"
            onChange={handleChange}
          />
        </label>

        <label className="register-form-group" htmlFor="email">
          Mot de passe :
          <input
            type="password"
            value={formData.password}
            name="password"
            id="password"
            placeholder="mot de passe"
            onChange={handleChange}
          />
        </label>

        <LinkButton
          linkTo={"/?sucessLogin=true"} // search query params
          label={"Valider"}
          onClickUserAction={handleSubmit}
        />
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;
