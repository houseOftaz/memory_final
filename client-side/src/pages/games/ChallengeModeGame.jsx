import SendMsgIcon from "../../../public/images/svg/SendMsgIcon";
import { useState, useEffect } from "react";
import ChallengeMsgPopup from "./lib/ChallengeMsgPopup";

function ChallengeModeGame() {
  const [usersWithGames, setUsersWithGames] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsersWithGames = async () => {
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
      if (response.ok) {
        const data = await response.json();
        setUsersWithGames(data);
      } else {
        throw new Error("Problème de connexion");
      }
    };
    fetchUsersWithGames();
  }, []);

  const openPopup = (user) => {
    setSelectedUser(user);
    setShowPopup(true);
  };

  const onSendMsg = async (msg) => {
    console.log("selectedUser", selectedUser);
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_URL_BACKEND
        }/server-side/game/challenge-msg`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            to_user_id: selectedUser.id,
            subject: "Défi",
            message: msg,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Problème de connexion");
      }
      console.log("Message envoyé");
      setShowPopup(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Classement des joueurs</h2>
      <table className="classement-table">
        <thead>
          <tr>
            <th>Classement</th>
            <th>Prénom du joueur</th>
            <th>Parties jouées</th>
            <th>Ecrire</th>
          </tr>
        </thead>
        <tbody>
          {usersWithGames.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.firstname}</td>
              <td>{user.games_played}</td>
              <td>
                <button onClick={() => openPopup(user)}>
                  <SendMsgIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && (
        <ChallengeMsgPopup
          user={selectedUser}
          onSendMsg={onSendMsg}
          onClose={() => setShowPopup(false)}
        />
      )}
      <h2>On vous défi !</h2>
      <table className="classement-table">
        <thead>
          <tr>
            <th>Classement</th>
            <th>Prénom du joueur</th>
            <th>Parties jouées</th>
            <th>Répondre</th>
          </tr>
        </thead>
        <tbody>
          {usersWithGames.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.firstname}</td>
              <td>{user.games_played}</td>
              <td>
                <button onClick={() => openPopup(user)}>
                  <SendMsgIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChallengeModeGame;
