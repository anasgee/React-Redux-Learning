import React from 'react';
import "../App.css";

const Header = (props) => {

    console.log(props)
  return (
    <>

        <div className='addToCart'>
          <span className='cartCount' >{props.data.length}</span>
                <img src='https://cdn-icons-png.flaticon.com/512/4379/4379542.png' alt='addtocart'/>
        </div>
   
    
    </>
  )
}

export default Header