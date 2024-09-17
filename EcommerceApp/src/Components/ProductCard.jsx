function ProductCard(props) {
  const { image, title, category_name, price, products, index  } = props;  
  return (
    <div className="product-sec" key={title+index}>
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
            onClick={() => props.addToCart(products)}
          >
            Add to Cart
          </button>
          <button className="button2">View Product</button>
          <div
            className="wishlist"
            onClick={() => props.addToWishlist(products)}
          >
            <i className="fa-solid fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;