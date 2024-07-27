import { useState } from "react";
import LinkButton from "../../components/buttons/LinkButton";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [sucessMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // NEW INFO HERE warning
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL_BACKEND}/server-side/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        crendentials: "include",
      }
    );
    if (!response.ok) {
      setError("Problème de connexion");
      throw new Error("Problème de connexion");
    }
    const data = await response.json();
    setSuccessMessage(data.message); // router.push("/home")
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
            autoComplete="email@example.com"
            onChange={handleChange}
          />
        </label>

        <LinkButton linkTo={"/"} label={"Valider"} onClick={handleSubmit} />

        {error && <p>{error}</p>}
        {sucessMessage && <p>{sucessMessage}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
