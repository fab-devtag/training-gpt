import Link from "next/link";
import { Card } from "./cards";
import Image from "next/image";

interface Props {
  card: Card;
  addToMyCollection: (card: Card) => void;
}
const CardItem = ({ card, addToMyCollection }: Props) => {
  return (
    <div>
      <Link href={`/Exercices/Exercice-11/${card.id}`}>
        <h1>{card.name}</h1>
        <Image
          className="w-200[px] h-[200px]"
          src={card.image}
          width={200}
          height={200}
          alt={card.name}
        />
      </Link>
      <button onClick={() => addToMyCollection(card)}>
        Ajout à ma collection
      </button>
    </div>
  );
};

export default CardItem;
