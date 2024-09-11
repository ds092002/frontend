import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART,CART_TO_WISHLIST, INCREMENT, DECREMENT} from "../Constant";

const CartReducer = (data = [], action) => {
    switch(action.type){
        case ADD_TO_CART: 
        console.log('Add To Cart', action);
        return[action.data, ...data]

        case REMOVE_TO_CART: 
        console.log('Remove to Cart', action);
           return data.filter(item => item.id !== action.data.id)

        case EMPTY_CART: 
        console.log('Empty Cart', action);
        return[]

        case CART_TO_WISHLIST: return{
            ...state
        }
        case INCREMENT: return{
            ...state
        }
        case DECREMENT: return{
            ...state
        }
        default:return data
    }
}

export default CartReducer

