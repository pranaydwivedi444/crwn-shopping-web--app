import ProductCard from "../product-card/product-card.component";
import "./category-preview.style.scss";
import { Link } from "react-router-dom";

function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}{" "}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, i) => i < 4)
          .map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
}

export default CategoryPreview;
