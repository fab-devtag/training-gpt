import { notFound } from "next/navigation";

const products = [
  {
    slug: "chaise",
    title: "Chaise design",
    description: "Une chaise confortable",
  },
  { slug: "lampe", title: "Lampe de bureau", description: "Éclaire tes idées" },
];

const ProductDetailPage = ({ params }: { params: { slug: string } }) => {
  const product = products.find((pro) => pro.slug === params.slug);
  if (!product) return notFound();
  return (
    <div>
      <h1>{product.title}</h1>
      <h2>{product.description}</h2>
    </div>
  );
};

export default ProductDetailPage;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const product = products.find((prd) => prd.slug === slug);
  if (!product) return notFound();
  return {
    title: product?.title,
    description: product?.description,
  };
}
