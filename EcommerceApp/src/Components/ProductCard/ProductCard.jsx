import {  useNavigate } from "react-router-dom";

function ProductCard({ image, title, category_name, price, product, addToCart, addToWishlist }) {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    // Navigate to the ViewProduct component, passing the product in the state
    navigate("/viewproduct", { state: { product } });
  };

  return (
    <div className="product-sec" key={title}>
      <div className="product-img-sec">
        <img src={image} alt={title} className="product-img" />
      </div>
      <div className="product-content-sec">
        <div className="product-text-sec">
          <p className="product-title">{title}</p>
          <p className="product-category">{category_name}</p>
          <p className="product-price">${price}</p>
        </div>
        <div className="product-button-sec">
          <button
            className="button2 add-button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <button className="button2" onClick={handleViewProduct}>
            View Product
          </button>
          <div
            className="wishlist"
            onClick={() => addToWishlist(product)}
          >
            <i className="fa-solid fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
