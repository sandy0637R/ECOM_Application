function ProductCard({ image, title, category_name, price, product, addToCart, addToWishlist }) {
  
  return (
    <div className="product-sec" key={title}>
      <div className="product-img-sec">
        <img
          src={image}
          alt=""
          className="product-img"
        />
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
          <button className="button2">View Product</button>
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