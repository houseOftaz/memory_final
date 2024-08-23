import { useState } from "react";

const ChallengeMsgPopup = ({ onClose, onSendMsg }) => {
  const [msg, setMsg] = useState("");

  const handleSendMsg = () => {
    onSendMsg(msg);
    setMsg("");
    onClose();
  };

  return (
    <div>
      <h2>Enoyer un message pour défier le joueur</h2>
      <textarea
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Entrez votre message"
      />
      <button onClick={handleSendMsg}>Envoyer</button>
      <button onClick={onClose}>Annuler</button>
    </div>
  );
};

export default ChallengeMsgPopup;
