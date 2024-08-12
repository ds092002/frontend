import { PRODUCT_ADD, PRODUCT_UPDATE, PRODUCT_DELETE, PRODUCT_ADD_SHOP } from "./Constant";
import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./Constant";
import { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST, EMPTY_WISHLIST } from "./Constant";
import { WISHLIST_TO_CART, CART_TO_WISHLIST } from "./Constant";
import { INCREMENT, DECREMENT } from "./Constant";


export const product_add = () => {
    return{
        type:PRODUCT_ADD
    }
}
export const product_update = () => {
    return{
        type:PRODUCT_UPDATE
    }
}
export const product_delete = () => {
    return{
        type:PRODUCT_DELETE
    }
}
export const product_add_shop = () => {
    return{
        type:PRODUCT_ADD_SHOP
    }
}
export const add_to_cart = () => {
    return{
        type:ADD_TO_CART
    }
}
export const remove_to_cart = () => {
    return{
        type:REMOVE_TO_CART
    }
}
export const empty_cart = () => {
    return{
        type:EMPTY_CART
    }
}
export const add_to_whishlist = () => {
    return{
        type:ADD_TO_WISHLIST
    }
}
export const remove_to_whishlist = () => {
    return{
        type:REMOVE_TO_WISHLIST
    }
}
export const empty_whishlist = () => {
    return{
        type:EMPTY_WISHLIST
    }
}
export const whishlist_to_cart = () => {
    return{
        type:WISHLIST_TO_CART
    }
}
export const cart_to_whishlist = () => {
    return{
        type:CART_TO_WISHLIST
    }
}
export const increment = () => {
    return{
        type:INCREMENT
    }
}
export const decrement = () => {
    return{
        type:DECREMENT
    }
}