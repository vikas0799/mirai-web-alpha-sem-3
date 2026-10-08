import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("hiii");
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);
  console.log("hiii ");

  // let result=products;
  let result = products.filter((product) => {
    return (
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
      &&
      (category === "all" || product.category === category)
    );
  });


  //  "beauty" === "all" || product.category === "beauty"
  // console.log(result);

  if (sort === "price-low") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-high") {
    result.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating-high") {
    result.sort((a, b) => b.rating - a.rating);
  }

  if (sort === "rating-low") {
    result.sort((a, b) => a.rating - b.rating);
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      <h1>Product Explorer</h1>
      
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Filters
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <h3>Products: {result.length}</h3>

      <ProductList products={result} />
    </div>
  );
}

export default App;