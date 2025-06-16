"use client";

import { useMemo, useState } from "react";
import UserList from "./UserList";
import { initialUsers, User } from "./users";

export default function Home() {
  /* const [users, setUsers] = useState<User[]>(initialUsers); */
  const [searchUser, setSearchUser] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const finalUsers = useMemo(() => {
    let array = [...initialUsers].sort((a, b) => {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });

    return array.filter((user) =>
      user.name.toLowerCase().includes(searchUser.toLowerCase())
    );
  }, [searchUser, sortOrder]);

  const resetFilters = () => {
    setSearchUser("");
    setSortOrder("asc");
  };

  return (
    <div>
      <h1>Liste Dynamique avec tri et filtrage</h1>
      <input
        className="bg-white text-black"
        type="text"
        value={searchUser}
        onChange={(e) => setSearchUser(e.target.value)}
      />
      <button
        className="bg-blue-500"
        onClick={() =>
          setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
        }
      >
        {sortOrder === "asc" ? "A - Z" : "Z - A"}
      </button>
      <button className="bg-amber-300 text-black" onClick={resetFilters}>
        Reset
      </button>
      <UserList users={finalUsers} />
    </div>
  );
}
