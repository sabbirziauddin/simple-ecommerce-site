import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [displayProducts,setDisplayProducts] =useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, [])
    useEffect(()=>{
        const savedCart = getStoredCart();
      /*   console.log(savedCart); */
        const storedCart =[];
        if(products.length){
            for (const key in savedCart) {
                console.log(key,savedCart[key])
                const addedProduct = products.find(product => product.key === key);
               // console.log(key, addedProduct);
               if(addedProduct){
                   const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    console.log(addedProduct);
               }
                storedCart.push(addedProduct);

            }
            setCart(storedCart);
            

        }
        
        
    }, [products])
    //search text box 
    const handleChange =(event)=>{
        const searchText = (event.target.value);
        const matchedProduct = products.filter(product =>product.name.toLowerCase().includes(searchText.toLowerCase()))
        console.log(matchedProduct);
        setDisplayProducts(matchedProduct);
        
        

    }


    const handleAddToCart = product => {
        //console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
        // add to local storage
        addToDb(product.key)
    }
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div >
            <div className='search-style'>
                <input onChange={handleChange}type="text"  placeholder='search your word'/>
                <span style ={{color:'white'}}>{element}</span>

            </div>
            
            <div className='shop'>

                <div className="products-conatainer">
                    <h3>products found: {displayProducts.length}  </h3>
                    

                    {
                        displayProducts.map(product => <Product
                            item={product}
                            key={product.key}
                            handleAddToCart={handleAddToCart}></Product>)
                    }

                </div>
                <div className="card-container">
                    <Cart cart={cart}></Cart>

                </div>
            </div>

        </div>
        
    );
};

export default Shop;