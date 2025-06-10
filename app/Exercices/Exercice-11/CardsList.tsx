import Link from "next/link";
import { Card } from "./cards";
import Image from "next/image";
interface Props {
  sortedArray: Card[];
  addToMyCollection: (card: Card) => void;
}

const CardsList = ({ sortedArray, addToMyCollection }: Props) => {
  return (
    <div className="flex flex-wrap space-x-2">
      {sortedArray.map((card) => (
        <div key={card.id}>
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
      ))}
    </div>
  );
};

export default CardsList;
