import { useContext } from "react";
import { SessionContext } from "../../context/SessionContextProvider";

const ProfileCard = () => {
  const { session } = useContext(SessionContext);
  const userData = session?.user;

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
      <p className="profile-rank-info">mon classement: 15 parties gagnées</p>
    </div>
  );
};

export default ProfileCard;
