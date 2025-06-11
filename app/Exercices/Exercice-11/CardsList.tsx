import { Card } from "./cards";
import CardItem from "./CardItem";

interface Props {
  sortedArray: Card[];
  addToMyCollection: (card: Card) => void;
}

const CardsList = ({ sortedArray, addToMyCollection }: Props) => {
  return (
    <div className="flex flex-wrap space-x-2">
      {sortedArray.map((card) => (
        <CardItem
          key={card.id}
          card={card}
          addToMyCollection={addToMyCollection}
        />
      ))}
    </div>
  );
};

export default CardsList;
