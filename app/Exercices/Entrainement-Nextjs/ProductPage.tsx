import { AddToCartForm } from "./AddToCartForm";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product: Product = await fetch(`/api/products/${params.id}`).then((r) =>
    r.json()
  );

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}€</p>

      <AddToCartForm productId={product.id} />
    </div>
  );
}
