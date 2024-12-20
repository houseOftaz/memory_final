import SendMsgIcon from "../../../../public/images/svg/SendMsgIcon";
import { useState, useEffect } from "react";
import ChallengeMsgPopup from "./ChallengeMsgPopup";
import ResponseChallengePopup from "./ResponseChallengePopup";
import LinkBtn from "../../../components/buttons/LinkBtn";
import DeleteMsgIcon from "../../../../public/images/svg/DeleteMsgIcon";

function ChallengeModeGame() {
  const [usersWithGames, setUsersWithGames] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [msg, setMsg] = useState([]);
  const [selectedMsg, setSelectedMsg] = useState(null);
  const [showResponsePopup, setShowResponsePopup] = useState(false);

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

  useEffect(() => {
    const fetchMsg = async () => {
      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_URL_BACKEND
        }/server-side/game/challenge-msg`,
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
        setMsg(data.msg);
      } else {
        throw new Error("Problème de connexion");
      }
    };
    fetchMsg();
  }, []);

  const openPopup = (user) => {
    setSelectedUser(user);
    setShowPopup(true);
  };

  const onSendMsg = async (msg) => {
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

  const openResponsePopup = (msg) => {
    setSelectedMsg(msg);
    setShowResponsePopup(true);
  };

  const deleteMsg = async (id) => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_URL_BACKEND
        }/server-side/game/challenge-msg/${id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
          },
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("Problème de connexion");
      }
      setMsg((prevMsg) => prevMsg.filter((msg) => msg.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const onSendResponse = async (userResponse) => {
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
            to_user_id: selectedMsg.from_user_id,
            subject: ` Re : ${selectedMsg.subject}`,
            message: userResponse,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Problème de connexion");
      }
      console.log("Message envoyé");
      setShowResponsePopup(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="challenge-mode-container">
      <h2 className="games-title">Défiez un joueur</h2>
      <table className="challenge-mode-table">
        <thead>
          <tr>
            <th>Classement</th>
            <th>Prénom du joueur</th>
            <th>Parties jouées</th>
            <th>Écrire</th>
          </tr>
        </thead>
        <tbody>
          {usersWithGames.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.firstname}</td>
              <td>{user.games_played}</td>
              <td>
                <button
                  className="send-msg-btn"
                  onClick={() => openPopup(user)}
                >
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
      <h2 className="games-title">On vous défi !</h2>
      <table className="challenge-mode-table">
        <thead>
          <tr>
            <th>De</th>
            <th>Sujet</th>
            <th>Message</th>
            <th>Répondre</th>
          </tr>
        </thead>
        <tbody>
          {msg.length === 0 ? (
            <tr>
              <td>Personne ne vous défie</td>
            </tr>
          ) : (
            msg.map((message) => (
              <tr key={message.id}>
                <td>{message.from_users_firstname}</td>
                <td>{message.subject}</td>
                <td>{message.message}</td>
                <td className="icon-msg-content">
                  <button
                    className="send-msg-btn"
                    onClick={() => openResponsePopup(message)}
                  >
                    <SendMsgIcon />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteMsg(message.id)}
                  >
                    <DeleteMsgIcon />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {showResponsePopup && (
        <ResponseChallengePopup
          message={selectedMsg}
          onClose={() => setShowResponsePopup(false)}
          onSendResponse={onSendResponse}
        />
      )}
      <LinkBtn linkTo="/" label="Retour" className="test-mode-btn" />
    </div>
  );
}

export default ChallengeModeGame;
