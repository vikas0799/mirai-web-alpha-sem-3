import ProductCard from "./ProductCard";

function ProductList({ products }) {

  if (products.length === 0) {
    return <h2>No Products Found</h2>;
  }

  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;