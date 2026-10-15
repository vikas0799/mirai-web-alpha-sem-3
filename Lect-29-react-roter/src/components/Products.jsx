import { Link } from "react-router";

const products = [
    { id: 101, name: "Laptop", catagory: "electronics", brand: "Apple" },
    { id: 102, name: "Mobile", catagory: "electronics", brand: "microsoft" },
    { id: 103, name: "Headphones", catagory: "sounds", brand: "Sony" }
];

function Products() {
    return (
        <div>
            <h1>Products</h1>

            {products.map((product) => (
                <div key={product.id} style={{backgroundColor:"aqua"}}>
                    <h3>{product.id}</h3>
                    <h3>{product.name}</h3>
                    {/* <h3>{product.catagory}</h3>
                    <h3>{product.brand}</h3> */}
                    <Link to={`/products/${product.id}`}>
                        View Details
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Products;