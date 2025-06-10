import { cards } from "../cards";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

export default function CardDetailsPage({ params }: Props) {
  const card = cards.find((card) => card.id === parseInt(params.id));
  if (!card) {
    return <div>Aucune card avec cet identifiant</div>;
  }
  return (
    <div>
      <h1>Detail de la carte de {card.name}</h1>
      <Image
        className="w-200[px] h-[200px]"
        src={card.image}
        width={200}
        height={200}
        alt={card.name}
      />
    </div>
  );
}
