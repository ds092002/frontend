import React from "react";

import { PRODUCT_ADD, PRODUCT_UPDATE, PRODUCT_DELETE, PRODUCT_ADD_SHOP } from "./Constant";
import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./Constant";
import { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST, EMPTY_WISHLIST } from "./Constant";
import { WISHLIST_TO_CART, CART_TO_WISHLIST } from "./Constant";
import { INCREMENT, DECREMENT } from "./Constant";

const initialState = {
    numOfProduct:20,
    cart:[],
    wishlist:[]
}

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case PRODUCT_ADD: return{
            ...state,
            numOfProduct:state.numOfProduct + 1
        }
        case PRODUCT_UPDATE: return{
            ...state,
            numOfProduct:state.numOfProduct + 1
        }
        case PRODUCT_DELETE: return{
            ...state,
            numOfProduct:state.numOfProduct - 1
        }
        case PRODUCT_ADD_SHOP: return{
            ...state,
            numOfProduct:state.numOfProduct + 1
        }
        case ADD_TO_CART: return{
            ...state,
            numOfProduct:state.numOfProduct - 1
        }
        case REMOVE_TO_CART: return{
            ...state,
            numOfProduct:state.numOfProduct - 1
        }
        case EMPTY_CART: return{
            ...state,
            numOfProduct:state.numOfProduct - 1
        }
        case ADD_TO_WISHLIST: return{
            ...state,
            numOfProduct:state.numOfProduct - 1
        }
        case REMOVE_TO_WISHLIST: return{
            ...state,
            numOfProduct:state.numOfProduct - 1
        }
        case EMPTY_WISHLIST: return{
            ...state,
            numOfProduct:state.numOfProduct - 1
        }
        case WISHLIST_TO_CART: return{
            ...state,
            numOfProduct:state.numOfProduct - 1
        }
        case CART_TO_WISHLIST: return{
            ...state,
            numOfProduct:state.numOfProduct - 1
        }
        case INCREMENT: return{
            ...state,
            numOfProduct:state.numOfProduct - 1
        }
        case DECREMENT: return{
            ...state,
            numOfProduct:state.numOfProduct - 1
        }

        default:return state
    }
}