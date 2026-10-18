import { useState } from "react";
import { products } from "../Data";
import ProductCard from "../components/ProductCard";

type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

const categories = ["All", ...new Set(products.map((p) => p.category))];

export const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<SortOption>("featured");
  const [inStockOnly, setInStockOnly] = useState(false);

  const query = search.trim().toLowerCase();

  const visibleProducts = products
    .filter((p) => category === "All" || p.category === category)
    .filter((p) => !inStockOnly || p.inStock)
    .filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query),
    )
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return a.id - b.id;
    });

  return (
    <main>
      <h1>Products</h1>
      <p>Browse our collection of {products.length} products.</p>

      <div className="product-toolbar">
        <input
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={sort} onChange={(e) => setSort(e.target.value as SortOption)}>
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          In stock only
        </label>
      </div>

      <div className="category-filters">
        {categories.map((c) => (
          <button
            key={c}
            className={c === category ? "active" : ""}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="product-count">
        Showing {visibleProducts.length} of {products.length} products
      </p>

      {visibleProducts.length > 0 ? (
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="product-empty">No products match your filters.</p>
      )}
    </main>
  );
};
