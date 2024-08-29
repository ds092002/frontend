import { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST, EMPTY_WISHLIST, WISHLIST_TO_CART } from "../Constant";

const WhishlistReducer = (data = [], action) => {
    switch(action.type){
        case ADD_TO_WISHLIST: return{
            data,
            numOfProduct:data.numOfProduct - 1
        }
        case REMOVE_TO_WISHLIST: return{
            data,
            numOfProduct:data.numOfProduct - 1
        }
        case EMPTY_WISHLIST: return{
            data,
            numOfProduct:data.numOfProduct - 1
        }
        case WISHLIST_TO_CART: return{
            data,
            numOfProduct:data.numOfProduct - 1
        }
        default:return data
    }
}

export default WhishlistReducer