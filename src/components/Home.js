import React from 'react';
import "../App.css";

const Home = (props) => {

    console.log(props)
  return (
    <>

    <h1>Home Component</h1>


    <div className='cart-card'>
        <div className='cart-pic item'>
                <img src='https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png' alt='this is image' />
        </div>
        <div className='cart-info item'>
            <h2>iPhone X</h2>
            <span>Price: $999</span>
          
        </div>
        <div className='cart-buttons item'>
            <button onClick={()=>{props.addToCartHandler({price:"1100",name:"Anas"})}}>Add to Cart</button>
            <button onClick={()=>{props.removeFromCartHandler()}}>Remove</button>
        </div>

    </div>
    
    </>
  )
}

export default Home