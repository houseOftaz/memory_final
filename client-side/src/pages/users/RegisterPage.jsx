import { useState, useContext } from "react";
import LinkBtn from "../../components/buttons/LinkBtn";
import { SessionContext } from "../../context/SessionContextProvider";
import FormField from "../../components/FormField";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { setSession } = useContext(SessionContext);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [showSubmitFormPopup, setShowSubmitFormPopup] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (formData.firstname.length < 4) {
      errors.firstname = "minimum 4 caractères";
    }
    if (formData.lastname.length < 4) {
      errors.lastname = "minimum 4 caractères";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;

    if (!emailRegex.test(formData.email)) {
      errors.email = "email invalide";
    }
    if (!passwordRegex.test(formData.password)) {
      errors.password = `le mot de passe doit contenir
        au moins 10 caractères dont une lettre majuscule,
        une lettre minuscule, un chiffre et un caractère
        spécial`;
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0) {
      setError(validateErrors);
      return;
    }

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
        setError({});
        navigate("/");
      } else {
        setShowSubmitFormPopup(false);
        setError({ global: "Vous êtes déjà inscrit" });
      }
    } catch (error) {
      setShowSubmitFormPopup(false);
      setError({ global: "Problème de connexion" });
    }
  };
  console.log(formData);
  return (
    <div className="form-container">
      <h2 className="register-title">Inscription</h2>

      {error?.global && <p className="error-msg">{error?.global}</p>}
      <form onSubmit={handleSubmit}>
        <FormField
          label="Prénom"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          error={error.firstname || ""}
          required
          autoComplete="firstname"
        />
        <FormField
          label="Nom"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          error={error.lastname || ""}
          required
          autoComplete="lastname"
        />
        <FormField
          label="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={error.email || ""}
          required
          autoComplete="email@example.com"
          placeholder="email@example.com"
        />
        <FormField
          label="Mot de passe"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={error.password || ""}
          required
          type="password"
          autoComplete="new-password"
        />
        <LinkBtn
          className="register-btn"
          linkTo={"/"}
          label={"Valider"}
          onClickUserAction={handleSubmit}
        />
      </form>

      <LinkBtn linkTo="/" label="Retour" className="register-btn return-btn" />
    </div>
  );
};

export default Register;
