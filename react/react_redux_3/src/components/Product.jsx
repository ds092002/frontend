import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { product_add, product_update, product_add_shop, product_delete} from '../reduxProducts/ActionProducts'
import { add_to_cart, empty_cart, remove_to_cart} from '../reduxProducts/ActionProducts'
import { add_to_whishlist, empty_whishlist, remove_to_whishlist} from '../reduxProducts/ActionProducts'
import { whishlist_to_cart, cart_to_whishlist} from '../reduxProducts/ActionProducts'
import { increment, decrement} from '../reduxProducts/ActionProducts'

const ProductContainer = () => {


    return(
        <div>

        </div>
    )
}

export default ProductContainer