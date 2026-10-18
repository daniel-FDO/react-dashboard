import { Link } from "react-router-dom";
import type { Product } from "../Data";

type ProductCardProps = {
  product: Product;
};

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/Prod/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className="product-badge">{product.badge}</span>}
        {!product.inStock && <span className="product-soldout">Out of stock</span>}
      </div>

      <div className="product-body">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-rating">
          ★ {product.rating.toFixed(1)}{" "}
          <span>({product.reviewCount.toLocaleString()} reviews)</span>
        </p>
        <p className="product-price">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
