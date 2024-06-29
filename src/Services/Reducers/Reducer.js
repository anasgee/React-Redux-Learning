import { AddToCart } from "../constants";
import { RemoveFromCart } from "../constants";


const initialState ={
    cartData: []
}

const cartItems =(state= [], action)=>{


    switch(action.type){
        case AddToCart:
            return[
                ...state,
               { cartData:action.data}
    ]
            break;
      
      
            case RemoveFromCart:
                state.pop()
            return[
                ...state,

    ]
            break;
            default:
                return state;
    }

}

export default cartItems;
