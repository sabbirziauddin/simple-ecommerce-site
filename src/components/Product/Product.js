import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';



const Product = (props) => {
    console.log(props);
    const { name, img, price, seller, stock,star } = props.item;
    const element = <FontAwesomeIcon icon={faShoppingCart} />


    return (
        <div className='product'>
            <div> <img src={img} alt="" />
            </div>
            <div style={{ marginLeft: '10px' }}>
                <h4 className='product-name'>{name}</h4>
                <p><small> by:{seller}</small></p>
                <p><small style={{ color: 'red' }}> only {stock} left in stock -order soon</small></p>
                <p>{price}</p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color "
                />
                 <br />
                <button className='btn-regular' onClick={() => props.handleAddToCart(props.item)}>{element} add to cart</button>
            </div>





        </div>
    );
};

export default Product;