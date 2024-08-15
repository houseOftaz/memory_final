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
      <h2>Des joueurs veulent jouer avec vous !</h2>
      <textarea
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Entrez votre message"
      />
      <button onClick={handleSendMsg}>Répondre</button>
      <button onClick={onClose}>Refuser</button>
    </div>
  );
};

export default ChallengeMsgPopup;
