"use client";

import { useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const allUsers = [
    { id: 1, name: "Alice", isOnline: true },
    { id: 2, name: "Bob", isOnline: false },
    { id: 3, name: "Charlie", isOnline: true },
  ];

  const [filter, setFilter] = useState("Tous");

  const filterButtons = ["Tous", "En ligne", "Hors Ligne"];

  const filteredUsers = allUsers.filter((user) => {
    if (filter === "En ligne") return user.isOnline;
    if (filter === "Hors Ligne") return !user.isOnline;
    return true;
  });

  return (
    <div className="bg-blue-600 w-fit">
      <div className="space-x-2 p-5">
        {filterButtons.map((button) => (
          <button
            key={button}
            className="border-2 border-black p-3 rounded-full cursor-pointer hover:bg-black"
            onClick={() => setFilter(button)}
          >
            {button}
          </button>
        ))}
      </div>
      <div>
        {filteredUsers.map((user) => (
          <UserCard key={user.id} name={user.name} isOnline={user.isOnline} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
