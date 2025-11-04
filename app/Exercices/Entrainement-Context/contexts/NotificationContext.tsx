"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

interface NotificationContextType {
  state: NotificationState;
  dispatch: Dispatch<NotificationAction>;
  successNotif: (text: string) => void;
  errorNotif: (text: string) => void;
  infoNotif: (text: string) => void;
}

interface Notification {
  id: string;
  text: string;
  type: "success" | "error" | "info";
}

interface NotificationState {
  notifications: Notification[];
}

type NotificationAction =
  | { type: "ADD"; notification: Omit<Notification, "id"> }
  | { type: "REMOVE"; id: string };
const NotificationContext = createContext<NotificationContextType | null>(null);

const notificationReducer = (
  state: NotificationState,
  action: NotificationAction
): NotificationState => {
  switch (action.type) {
    case "ADD":
      return {
        notifications: [
          ...state.notifications,
          { ...action.notification, id: Date.now().toString() },
        ],
      };
    case "REMOVE":
      return {
        notifications: state.notifications.filter(
          (notif) => notif.id !== action.id
        ),
      };
    default:
      return state;
  }
};
export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const initialState = { notifications: [] };
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  const addNotification = (
    text: string,
    type: "success" | "error" | "info"
  ) => {
    const id = Date.now().toString();
    dispatch({ type: "ADD", notification: { text: text, type: type } });
    setTimeout(() => {
      dispatch({ type: "REMOVE", id: id });
    }, 3000);
  };
  const successNotif = (text: string) => {
    addNotification(text, "success");
  };
  const errorNotif = (text: string) => {
    addNotification(text, "error");
  };
  const infoNotif = (text: string) => {
    addNotification(text, "info");
  };
  const values = useMemo(() => {
    return { state, dispatch, successNotif, errorNotif, infoNotif };
  }, [state, successNotif, infoNotif, errorNotif]);

  return (
    <NotificationContext.Provider value={values}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "useNotificationContext must be within Notification Provider"
    );
  }

  return context;
};
