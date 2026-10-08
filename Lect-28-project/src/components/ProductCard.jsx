function ProductCard({ product }) {
  return (
    <div className="card">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>Category: {product.category}</p>

      <p>Price: ${product.price}</p>

      <p>Rating: ⭐ {product.rating}</p>

      <p>Stock: {product.stock}</p>

    </div>
  );
}

export default ProductCard;