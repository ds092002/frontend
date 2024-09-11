import { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST, EMPTY_WISHLIST, WISHLIST_TO_CART } from "../Constant";


export const add_to_whishlist = (data) => {
    return{
        type:ADD_TO_WISHLIST,
        data
    }
}
export const remove_to_whishlist = (id) => {
    return{
        type:REMOVE_TO_WISHLIST,
        data:{id}
    }
}
export const empty_whishlist = (data) => {
    return{
        type:EMPTY_WISHLIST,
        data
    }
}
export const whishlist_to_cart = (data) => {
    return{
        type:WISHLIST_TO_CART,
        data
    }
}