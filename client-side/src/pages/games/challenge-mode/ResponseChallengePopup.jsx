import { useState } from "react";

const ResponseChallengePopup = ({ onClose, message, onSendResponse }) => {
  const [response, setResponse] = useState("");

  const handleSendResponse = () => {
    onSendResponse(response);
    setResponse("");
    onClose();
  };

  return (
    <div>
      <h2>Vous avez été défié par {message.from_user_id}</h2>
      <p>Sujet : {message.subject}</p>
      <p>Message : {message.message}</p>
      <textarea
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        placeholder="Entrez votre réponse"
      />
      <button onClick={handleSendResponse}>Répondre</button>
      <button onClick={onClose}>Fermer</button>
    </div>
  );
};

export default ResponseChallengePopup;
