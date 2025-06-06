interface UserProps {
  name: string;
  isOnline: boolean;
}

const UserCard = ({ name, isOnline }: UserProps) => {
  return (
    <div className="bg-amber-200 border-b-2 border-black">
      <h1 className="text-black">{name}</h1>
    </div>
  );
};

export default UserCard;
