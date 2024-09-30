// ProductView.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../../redux/actions'; // Import actions
import './ProductView.css';

const ProductView = () => {
    const products = useSelector((state) => state.products); // Assuming products are stored in redux
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product, quantity: 1 })); // Dispatch action to add product to cart
    };

    const handleAddToWishlist = (product) => {
        dispatch(addToWishlist(product)); // Dispatch action to add product to wishlist
    };

    return (
        <div className='product-view-container'>
            <h1>Products</h1>
            <div className='product-grid'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className='product-card'>
                            <img src={product.image} alt={product.title} className='product-image' />
                            <h2 className='product-title'>{product.title}</h2>
                            <p className='product-price'>${product.price.toFixed(2)}</p>
                            <p className='product-category'>{product.category}</p>
                            <div className='button-group'>
                                <button
                                    className='add-to-cart-button'
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Add to Cart
                                </button>
                                <button
                                    className='add-to-wishlist-button'
                                    onClick={() => handleAddToWishlist(product)}
                                >
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
    );
};

export default ProductView;
