import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART,CART_TO_WISHLIST, INCREMENT, DECREMENT} from "../Constant";

const CartReducer = (data = [], action) => {
    switch(action.type){
        case ADD_TO_CART: 
        console.log('Add To Cart', action);
        return[action.data, ...data]

        case REMOVE_TO_CART: 
        console.log('Remove to Cart', action);
        data.length =  data.length ? data.length -1 : []
        return[...data]

        case EMPTY_CART: 
        console.log('Empty Cart', action);
        data = []
        return[...data]

        case CART_TO_WISHLIST: return{
            
        }
        case INCREMENT: return{
            
        }
        case DECREMENT: return{
            
        }
        default:return data
    }
}

export default CartReducer

