import { BUY_DABELI, BUY_VADAPAAV } from "./Constant";

export const buy_dabeli = (data) => {
    console.log('buy_dabeli Action Called');
    return{
        type:BUY_DABELI,
        data:'Dabeli'
    }
}
export const buy_vadapaav = (data) => {
    console.log('buy_vadapaav Action Called');
    return{
        type:BUY_VADAPAAV,
        data:'Vadapaav'
    }
}