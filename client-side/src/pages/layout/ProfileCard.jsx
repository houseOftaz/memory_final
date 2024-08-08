import { useContext } from "react";
import { SessionContext } from "../../context/SessionContextProvider";

const ProfileCard = () => {
  const { session } = useContext(SessionContext);
  const userData = session?.user;

  console.log(userData);

  return (
    <div>
      <img
        src={`${import.meta.env.VITE_BASE_URL_BACKEND}/images/${
          userData?.avatar
        }`}
        alt="avatar"
        width="100"
        height="100"
      />
      <h1>
        {userData?.firstname} {userData?.lastname}
      </h1>
      <p>mon classement 15 parties gagnées</p>
      <h2>Classement des joueurs</h2>
      <table className="classement-table">
        <thead>
          <tr>
            <th>Classement</th>
            <th>Prénom du joueur</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jean</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileCard;
