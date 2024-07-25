import { useState } from "react";

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
    console.log(formData);
    // NEW INFO HERE warning
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL_BACKEND}/server-side/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
    <>
      <form onSubmit={handleSubmit}>
        <div className="signup-form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            value={formData.email}
            name="email"
            id="email"
            placeholder="email@example.com"
            autoComplete="email@example.com"
            onChange={handleChange}
          />
        </div>

        <div className="signup-form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            value={formData.password}
            name="password"
            id="password"
            autoComplete="new-password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-signup-btn">
          Valider
        </button>

        {error && <p>{error}</p>}
        {sucessMessage && <p>{sucessMessage}</p>}
      </form>
    </>
  );
}

export default LoginPage;
