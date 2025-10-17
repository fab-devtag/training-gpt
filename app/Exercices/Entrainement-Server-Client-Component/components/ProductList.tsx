interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const ProductList = async ({
  searchParams,
}: {
  searchParams?: { category?: string };
}) => {
  const products: Product[] = await fetch(
    "https://fakestoreapi.com/products"
  ).then((res) => res.json());

  const params = await searchParams;
  console.log(params?.category);
  return (
    <div>
      {products
        .filter((product) => product.category.includes(params?.category || ""))
        .map((product) => (
          <p key={product.id}>{product.title}</p>
        ))}
    </div>
  );
};
