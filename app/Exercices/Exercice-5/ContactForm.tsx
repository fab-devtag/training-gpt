"use client";

import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [canSend, setCanSend] = useState(false);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !mail || !message) {
      setError(true);
    } else {
      setCanSend(true);
    }
  };

  return (
    <div className="w-full flex h-screen justify-center items-center">
      {!canSend ? (
        <form className="flex flex-col space-y-2 w-48" onSubmit={sendMessage}>
          <label>Prenom :</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white text-black"
          />
          {!name && error && (
            <p className="text-red-400">Le prénom est obligatoire</p>
          )}
          <label>Mail :</label>
          <input
            type="email"
            name="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="bg-white text-black"
          />
          {!mail && error && (
            <p className="text-red-400">Le mail est obligatoire</p>
          )}
          <label>Message :</label>
          <input
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-white text-black"
          />
          {!message && error && (
            <p className="text-red-400">Le message est obligatoire</p>
          )}
          <input
            type="submit"
            className="bg-blue-500 text-black disabled:bg-gray-500"
            title="Envoyer"
            disabled={name && mail && message ? false : true}
          />
        </form>
      ) : (
        <p>
          Le message a bien été envoyé : De la part de {name} - {mail} :{" "}
          {message}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
