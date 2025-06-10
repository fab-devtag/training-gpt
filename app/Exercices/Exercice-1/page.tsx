import UserCard from "./UserCard";

export default function Home() {
  return (
    <div>
      <UserCard name="Fabien" email="test@youhou.com" isOnline={true} />
    </div>
  );
}
