function Filters({category,setCategory,sort,setSort,}) {
  return (
    <div className="filters">
      <h1>sagar</h1>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="furniture">Furniture</option>
        <option value="groceries">Groceries</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="price-low">
          Price: Low to High
        </option>
        <option value="price-high">
          Price: High to Low
        </option>
        <option value="rating-high">
          Rating: High to Low
        </option>
        <option value="rating-low">
          Rating: Low to High
        </option>
      </select>

    </div>
  );
}

export default Filters;