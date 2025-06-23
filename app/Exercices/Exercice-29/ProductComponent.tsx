const ProductComponent = async () => {
  const product = await Promise.resolve({ id: 1, name: "Pain", price: 15 });
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductComponent;
