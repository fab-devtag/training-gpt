import React from "react";
import { User } from "./users";

interface Props {
  users: User[];
}

const UserList = React.memo(({ users }: Props) => {
  return (
    <div className="flex flex-col">
      {users.map((user) => (
        <span key={user.id}>{user.name}</span>
      ))}
    </div>
  );
});

export default UserList;
