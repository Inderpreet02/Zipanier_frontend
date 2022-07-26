import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Annoucements from '../components/Annoucements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { addProduct } from '../redux/cartRedux'
import { publicRequest } from '../requestMethods'
import { useDispatch } from 'react-redux'
import './ProductPage.css'

const ProductPage = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const dispatch = useDispatch();

    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")

    const handleQuandity = (type) => {
        if(type === "desc") {
            if(quantity > 1){
                setQuantity(quantity - 1)
            }
        }else{
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        // UpdateCart
        // could use axios but will be done in redux
        dispatch(addProduct({...product, quantity, color, size}))
        
    }

    useEffect(() =>{
        const getProduct = async () => {

            try{
                const res = await publicRequest.get(`/products/find/${id}`)
                setProduct(res.data);
                console.log(res);
            }catch(error){
                console.log(error);
            }
        } 

        getProduct();
    }, [id])
  return (
    <div className='prodpage__container'>
        <Navbar/>
        <Annoucements/>
        {
            product && (
                <div className="prodpage__wrapper">
                    <div className="prodpage__imgContainer">
                        <img src={ product ? product.img : "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"} alt="" className="prodpage__img" />
                    </div>
                    <div className="prodpage__infoContainer">
                        <div className="prodpage__title">{product.title}</div>
                        <div className="prodpage__desc">
                            {product.desc}
                        </div>
                        <div className="prodpage__price">Rs. {product.price}</div>
                        <div className="prodpage__filterContainer">
                            <div className="prodpage__filter">
                                <div className="prodpage__filterTitle">Color</div>
                                {
                                    product.color?.map((c) => (
                                        <div className="prodpage__filterColor" key={c} onClick={() => setColor(c)} style={{"backgroundColor": `${c}`}}></div>
                                    ))
                                }
                                {/* <div className="prodpage__filterColor" style = {{"backgroundColor": "blue"}}></div>
                                <div className="prodpage__filterColor" style = {{"backgroundColor": "gray"}}></div> */}
                            </div>

                            <div className="prodpage__filter">
                                <div className="prodpage__filterTitle">Size</div>
                                <select className="prodpage__filterSize" onChange={(e) => setSize(e.target.value)}>
                                    {
                                        product.size?.map((s) => (
                                            <option className="prodpage__filterSizeOption"  key={s}>{s}</option>
                                        ))
                                    }
                                    {/* <option className="prodpage__filterSizeOption">S</option>
                                    <option className="prodpage__filterSizeOption">M</option>
                                    <option className="prodpage__filterSizeOption">L</option>
                                    <option className="prodpage__filterSizeOption">XL</option> */}
                                </select>
                            </div>
                        </div>

                        <div className="prodpage__addContainer">
                            <div className="prodpage__amountContainer">
                                <div className="prodpage__remove" onClick={() => handleQuandity("desc")}>-</div>
                                <span className="prodpage__amount">{quantity}</span>
                                <div className="prodpage__add" onClick={() => handleQuandity("asc")}>+</div>
                            </div>
                            <button className="prodpage__btn" onClick={handleClick}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            )
        }
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductPage