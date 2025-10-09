import { useState, useEffect } from "react";

function ChatRoom({ roomId }: { roomId: string }) {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const connection = createConnection(roomId);
    connection.on("message", (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });
    connection.connect();

    // TODO: Ajoutez la cleanup function
    return () => {
      connection.disconnect();
    };
  }, [roomId]);

  return (
    <ul>
      {messages.map((msg, i) => (
        <li key={i}>{msg}</li>
      ))}
    </ul>
  );
}

// Fonction helper (simulation)
function createConnection(roomId: string) {
  return {
    on: (event: string, handler: (msg: string) => void) => {},
    connect: () => {},
    disconnect: () => {},
  };
}
