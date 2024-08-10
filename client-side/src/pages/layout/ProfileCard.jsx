import { useContext, useState, useEffect } from "react";
import { SessionContext } from "../../context/SessionContextProvider";

const ProfileCard = () => {
  const { session } = useContext(SessionContext);
  const userData = session?.user;
  const [userRank, setUserRank] = useState(null);

  useEffect(() => {
    const fetchUserRank = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL_BACKEND}/server-side/auth/rank`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
            credentials: "include",
          }
        );
        const data = await response.json();
        const rankIndex = data.findIndex(
          (user) => user.firstname === userData.firstname
        );
        setUserRank(rankIndex + 1);
      } catch (error) {
        throw new Error("Problème de connexion");
      }
    };
    fetchUserRank();
  }, [userData]);

  return (
    <div className="profile-card-container">
      <img
        src={`${import.meta.env.VITE_BASE_URL_BACKEND}/images/${
          userData?.avatar
        }`}
        alt="avatar"
        width="100"
        height="100"
        className="profile-card-avatar"
      />
      <h2 className="profile-card-name">
        {userData?.firstname} {userData?.lastname}
      </h2>
      <p className="profile-rank-info">
        {userRank ? `Mon classement : ${userRank}` : "Classement indisponible"}
      </p>
    </div>
  );
};

export default ProfileCard;
