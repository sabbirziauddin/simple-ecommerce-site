import React from 'react';
import Product from '../Product/Product';
import './Cart.css'


const Cart = (props) => {
    console.log(props)
    const { cart } = props;
    let total = 0;
    let name = ' '
    let img = ' '
    let totalQuantity = 0;
    for (const item of cart) {
        console.log(item)
        total = (total + item.price*item.quantity);
        name = item.name.slice(0, 10);
        img = item.img;
        if(!item.quantity){
            item.quantity =1;
        }
        totalQuantity = totalQuantity +item.quantity;
        



    } 
    const shipping = 20;
    const tax = (total + shipping) * .01;
    const grandTotal = total + shipping + tax;
  
    /* const totalReducer = (previous,product)=>previous+product.price;
     total = cart.reduce(totalReducer,0);
     if(!cart.quantity){
         cart.quantity =1; 
     }
     
    totalQuantity = totalQuantity + cart.quantity;
     const shipping = 20 ;
     const tax = (total+shipping) *.01;
     const grandTotal =total +shipping + tax; */
 
    return (
        <div>

            <h3>Order summery:{totalQuantity}</h3>
            <h3>total price:{total.toFixed(2)}</h3>
            <h3>shipping :${shipping}</h3>
            <h2>tax :${tax.toFixed(2)}</h2>
            <h3> grand total :${grandTotal.toFixed(2)}</h3>
            <div className='cart'>
                <img src={img} alt="" />
                <h3>Name:{name}</h3>
                

            </div>
            {/* <ul>
                {
                    cart.map(pd => <li>{pd.name}</li>

                    )
                }
            </ul> */}





        </div>
    );
};

export default Cart;