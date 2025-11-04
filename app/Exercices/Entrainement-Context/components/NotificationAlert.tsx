"use client";
import { useNotificationContext } from "../contexts/NotificationContext";

export const NotificationAlert = () => {
  const { state, successNotif, errorNotif, infoNotif } =
    useNotificationContext();
  return (
    <div className="flex flex-col">
      <div className="fixed top-4 right-4 space-y-2">
        {state.notifications.map((notif) => (
          <div
            key={notif.id}
            className={`p-4 rounded shadow-lg ${
              notif.type === "success"
                ? "bg-green-500"
                : notif.type === "error"
                ? "bg-red-500"
                : "bg-orange-500"
            } text-white`}
          >
            {notif.text}
          </div>
        ))}
      </div>
      <button onClick={() => successNotif("Je suis une notif de succès")}>
        Afficher succès
      </button>
      <button onClick={() => infoNotif("Je suis une notif d'info")}>
        Afficher info
      </button>
      <button onClick={() => errorNotif("Je suis une notif d'erreur")}>
        Afficher error
      </button>
    </div>
  );
};
