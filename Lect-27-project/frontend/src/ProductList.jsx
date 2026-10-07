// import React from 'react'

// function ProductList({products}) {
//     console.log(products);
//   return (
//     <div>
//         <h1>rendering data</h1>
//         {
//             products.map(
//                 (product)=>{
//                       return (
//                         <>
//                           <div style={{backgroundColor:'red'}}>
//                             <h1>{product.title}</h1>
//                           <h1>{product.description}</h1>
//                           <h1>{product.catagory}</h1>
//                           </div>

//                         </>
//                       )
//                 }
//             )
//         }
//     </div>
//   )
// }

// export default ProductList



import React from 'react';
import './ProductList.css';

function ProductList({ products }) {
  return (
    <div className="product-container">
      <h1 className="page-title">Our Products</h1>

      <div className="product-grid">
        {products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              
              <div className="product-image">
                <img src={product.thumbnail} alt={product.title} />
              </div>

              <div className="product-content">
                <span className="product-category">
                  {product.category}
                </span>

                <h2>{product.title}</h2>

                <p className="description">
                  {product.description}
                </p>

                <div className="product-info">
                  <span className="price">${product.price}</span>
                  <span className="rating">
                    ⭐ {product.rating}
                  </span>
                </div>

                <p className="stock">
                  {product.stock > 0 ? '🟢 In Stock' : '🔴 Out of Stock'}
                </p>

                <button className="buy-btn">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;