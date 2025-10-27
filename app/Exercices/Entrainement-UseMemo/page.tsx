import { FilteredList } from "./FilteredList";
import { Statistics } from "./Statistics";

export interface Product {
  id: string;
  name: string;
  price: number;
}

export default function Main() {
  const products: Product[] = Array.from({ length: 1000 }, (_, i) => {
    return {
      id: `prod-${i + 1}`,
      name: `Product ${i + 1}`,
      price: Math.round(Math.random() * 1000) / 10,
    };
  });

  const numbers = Array.from({ length: 1000 }, () => {
    return Math.floor(Math.random() * 1000);
  });

  return (
    <div>
      <Statistics numbers={numbers} />
      <FilteredList products={products} />
    </div>
  );
}
