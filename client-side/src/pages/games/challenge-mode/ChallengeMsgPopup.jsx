import { useState } from "react";

const ChallengeMsgPopup = ({ onClose, onSendMsg }) => {
  const [msg, setMsg] = useState("");

  const handleSendMsg = () => {
    onSendMsg(msg);
    setMsg("");
    onClose();
  };

  return (
    <div className="end-game-alert">
      <h2 className="challenge-msg-title">
        Enoyer un message pour défier le joueur
      </h2>
      <textarea
        className="challenge-msg-input"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Entrez votre message"
      />
      <button className="start-btn" onClick={handleSendMsg}>
        Envoyer
      </button>
      <button className="start-btn" onClick={onClose}>
        Annuler
      </button>
    </div>
  );
};

export default ChallengeMsgPopup;
