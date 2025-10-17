import { AddToCart } from "../../components/AddToCart";
import { Card } from "../../components/Card";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product: Product = await fetch(
    `https://fakestoreapi.com/products/${id}`
  ).then((res) => res.json());

  return (
    <div className="flex">
      <div className="flex flex-col w-full space-y-2 h-fit bg-blue-500">
        <Card>
          <Card.Header>
            <Card.Title>Hello</Card.Title>
            <Card.SubTitle>World</Card.SubTitle>
            <button>Edit</button>
          </Card.Header>
          <Card.Image src="" />
          <Card.Footer>Footer</Card.Footer>
        </Card>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <img
          src={product.image}
          alt={product.title}
          className="w-full rounded-lg"
        />
        <div className="flex space-x-2">
          <p>{product.rating.rate}</p>
          <p>{product.rating.count}</p>
        </div>
        <AddToCart productId={product.id} productTitle={product.title} />
      </div>
    </div>
  );
}
