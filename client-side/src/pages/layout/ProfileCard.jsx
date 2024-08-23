import { useContext } from "react";
import { SessionContext } from "../../context/SessionContextProvider";

const ProfileCard = ({ usersWithGames }) => {
  const { session } = useContext(SessionContext);
  const userData = session?.user;

  const rankIndex = usersWithGames.findIndex(
    (user) => user.firstname === userData.firstname
  );
  const userRank = rankIndex + 1;

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
      <h2>
        {userData?.firstname} {userData?.lastname}
      </h2>
      <p className="profile-rank-info">
        {userRank ? `Mon classement : ${userRank}` : "Classement indisponible"}
      </p>
    </div>
  );
};

export default ProfileCard;
