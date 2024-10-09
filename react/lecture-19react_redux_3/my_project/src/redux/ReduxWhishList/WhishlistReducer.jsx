import { act } from "react";
import { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST, EMPTY_WISHLIST, WISHLIST_TO_CART } from "../Constant";

const WhishlistReducer = (data = [], action) => {
    switch(action.type){
        case ADD_TO_WISHLIST:
        console.log('Add To Whishlist', action);
        return[action.data, ...data]

        case REMOVE_TO_WISHLIST: 
            console.log('Remove To Whishlist', action);
            return data.filter(item => item.id !== action.data.id)

        case EMPTY_WISHLIST: 
            console.log('Empty WhishList', action);
            return[]

        case WISHLIST_TO_CART: return{
            ...state
        }
        default:return data
    }
}

export default WhishlistReducer