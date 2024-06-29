import {AddToCart} from "../constants"
import {RemoveFromCart} from "../constants"

export const addToCart = (data)=>{
    console.log(data)
    return{
        type:AddToCart,
        data,
    }
}
export const removeFromCart = ()=>{
    return{
        type:RemoveFromCart,
      
    }
}

