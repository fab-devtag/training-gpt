import { ProductList } from "../components/ProductList";
import { Sidebar } from "../components/Sidebar";

export default function ProductsListPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  return (
    <Sidebar>
      <ProductList searchParams={searchParams} />
    </Sidebar>
  );
}
