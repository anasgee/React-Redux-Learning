import {connect } from "react-redux";
import Home from "../components/Home";
import { addToCart,removeFromCart } from "../Services/Actions/Actions";

const mapStateToProps = state =>({
    data:state.cartItems

});


const mapDispatchToProps = dispatch =>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeFromCartHandler:data=>dispatch(removeFromCart(data)),
})


export default connect(mapStateToProps,mapDispatchToProps)(Home);

