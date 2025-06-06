import { CartItem } from "./types";

interface Props {
  item: CartItem;
}

const Cart = ({ item }: Props) => {
  return (
    <div className="flex space-x-2">
      <p>{item.name}</p>
      <p>Quantité : {item.quantity}</p>
    </div>
  );
};

export default Cart;
