import React from 'react'
import Annoucements from '../components/Annoucements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './Cart.css'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector(state => state.cart)


  return (
    <div className='cart__container'>
       <Navbar/>
       <Annoucements/>
       <div className="cart__wrapper">
         <h1 className="cart__title">
           YOUR CART
         </h1>
         <div className="cart__top">
            <button className="cart__topBtn">CONTINUE SHOPPING</button>
            <div className="cart__topTexts">
              <div className="cart__topText">Shopping Bag(2)</div>
              <div className="cart__topText">You'r Wishlist(0)</div>
            </div>
            <button className="cart__topBtn cart__topBtnFill">CHECKOUT NOW</button>
         </div>
         <div className='cart__bottomBtn'>
           <div className="cart__info">

            {

              cart.products.map((product) => (
                <>
                <div className="cart__product">
                  <div className="cart__prodDetail">
                    <img src={product.img} alt="" className="cart__prodImg" />
                    <div className="cart__prodDetails">
                      <div className="cart__prodName">
                        <b>Product:</b> {product.title}
                      </div>
                      <div className="cart__prodId">
                        <b>ID:</b> {product._id}
                      </div>
                      <div className="cart__prodColor">
    
                      </div>
                      <div className="cart__prodSize">
                        <b>Size:</b> {product.size}
                      </div>
                    </div>
                  </div>
                  <div className="cart__prodPriceDetail">
                    <div className="cart__prodAmountContainer">
                      <AiOutlineMinus/>
                      <div className="cart__prodAmount">
                        {product.quantity}
                      </div>
                      <AiOutlinePlus/>
                    </div>
    
                    <div className="cart__prodPrice">
                      Rs. {product.price * product.quantity}
                    </div>
                  </div>
                </div>
                <hr />
                </>
              ))
  
            }
           </div>
           <div className="cart__summary">
              <h1 className="cart__summTitle">
                ORDER SUMMARY
              </h1>
              <div className="cart__summItem">
                <span className="cart__summItemText">Subtotal</span>
                <span className="cart__summItemPrice">Rs. {cart.total}</span>
              </div>
              <div className="cart__summItem">
                <span className="cart__summItemText">Estimate Shipping</span>
                <span className="cart__summItemPrice">Rs. 150</span>
              </div>
              <div className="cart__summItem">
                <span className="cart__summItemText">Discount</span>
                <span className="cart__summItemPrice">Rs. -150</span>
              </div>
              <div className="cart__summItem">
                <span className="cart__summItemText total">Total</span>
                <span className="cart__summItemPrice total">Rs. {cart.total}</span>
              </div>

              <button className="cart__checkout">
                CHECKOUT NOW
              </button>
           </div>
         </div>
         <div className="cart__bottom">

         </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Cart