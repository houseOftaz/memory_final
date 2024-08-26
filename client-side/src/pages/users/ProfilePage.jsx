import { useState, useContext, useEffect } from "react";
import LinkBtn from "../../components/buttons/LinkBtn";
import { SessionContext } from "../../context/SessionContextProvider";

const ProfilePage = () => {
  const { session, setSession } = useContext(SessionContext);
  const [userData, setUserData] = useState({
    firstname: session?.user?.firstname || "",
    lastname: session?.user?.lastname || "",
    email: session?.user?.email || "",
    avatar: session?.user?.avatar || "",
  });
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    if (session?.user) {
      setUserData({
        firstname: session?.user?.firstname || "",
        lastname: session?.user?.lastname || "",
        email: session?.user?.email || "",
        avatar: session?.user?.avatar || "",
      });
    }
  }, [session]);

  useEffect(() => {
    const gameImages = [
      "cat.webp",
      "cow.webp",
      "dog.webp",
      "eagle.webp",
      "elephant.webp",
      "monkey.webp",
      "panda.webp",
      "parrot.webp",
      "shark.webp",
      "snake.webp",
    ];

    const randomIndex = Math.floor(Math.random() * gameImages.length);
    const selectedImage = gameImages[randomIndex];
    setRandomImage(`images/animals/${selectedImage}`);
  }, []);

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
      setSession(result);
      alert("Profile mis à jour");
    } catch (error) {
      alert("Problème lors de la mise à jour");
    }
  };

  return (
    <div className="form-container">
      <h2 className="profile-title">Profile</h2>
      <img
        src={
          userData.avatar
            ? `${import.meta.env.VITE_BASE_URL_BACKEND}/images/${
                userData.avatar
              }`
            : randomImage
        }
        alt="avatar"
        width="100"
        height="100"
      />
      <form
        className="login-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label className="form-label" htmlFor="firstname">
          Prénom :
          <input
            className="register-form-input"
            type="text"
            value={userData.firstname}
            name="firstname"
            id="firstname"
            placeholder="Prénom"
            onChange={handleChange}
          />
        </label>

        <label className="form-label" htmlFor="lastname">
          Nom :
          <input
            className="register-form-input"
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

        <label className="form-label" htmlFor="email">
          Email :
          <input
            className="register-form-input"
            type="email"
            value={userData.email}
            name="email"
            id="email"
            placeholder="email@example.com"
            autoComplete="email@example.com"
            onChange={handleChange}
          />
        </label>

        <label className="form-label" htmlFor="avatar">
          Avatar :
          <input
            className="register-form-input"
            type="file"
            name="avatar"
            id="avatar"
          />
        </label>
        {/** 
        <LinkBtn linkTo={"/"} label={"Valider"} onClick={handleSubmit} />
        */}
        <button className="submit-btn-profil" type="submit">
          Valider
        </button>
      </form>

      {session && session.user.role === "admin" && (
        <p>Vous connecté en tant qu&apos;administrateur.</p>
      )}
      {session && (
        <p>
          Vous êtes connecté en tant que {session.user.firstname}{" "}
          {session.user.lastname}
        </p>
      )}

      <LinkBtn linkTo="/" label="Retour" className="login-btn" />
    </div>
  );
};

export default ProfilePage;
