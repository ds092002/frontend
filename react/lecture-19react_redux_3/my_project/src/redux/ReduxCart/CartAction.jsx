import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART,CART_TO_WISHLIST, INCREMENT, DECREMENT} from "../Constant";

export const add_to_cart = (data) => {
    return{
        type:ADD_TO_CART,
        data
    }
}
export const remove_to_cart = (id) => {
    return{
        type:REMOVE_TO_CART,
        data:{id}
    }
}
export const empty_cart = (data) => {
    return{
        type:EMPTY_CART,
        data
    }
}
export const cart_to_whishlist = (data) => {
    return{
        type:CART_TO_WISHLIST,
        data
    }
}
export const increment = (data) => {
    return{
        type:INCREMENT,
        data
    }
}
export const decrement = (data) => {
    return{
        type:DECREMENT,
        data
    }
}