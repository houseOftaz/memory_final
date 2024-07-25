import { useState, useEffect } from "react";
import LinkButton from "../../components/buttons/LinkButton";

function ProfilPage() {
  const [profilData, setProfilData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL_BACKEND}/server-side/auth/profile`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProfilData(data);
      } else {
        throw new Error("Problème de connexion");
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfilData({
      ...profilData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(profilData);
  };

  return (
    <div className="form-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <label className="signup-form-group" htmlFor="email">
          Email :
          <input
            type="email"
            value={profilData.email}
            name="email"
            id="email"
            placeholder="email@example.com"
            autoComplete="email@example.com"
            onChange={handleChange}
          />
        </label>

        <label className="signup-form-group" htmlFor="password">
          Mot de passe :
          <input
            type="password"
            value={profilData.password}
            name="password"
            id="password"
            autoComplete="new-password"
            onChange={handleChange}
          />
        </label>

        <LinkButton linkTo={"/"} label={"Valider"} onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default ProfilPage;
