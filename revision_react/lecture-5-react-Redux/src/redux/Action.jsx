import { BUY_COCO, BUY_THIKSHAK } from "./Constant";

export const buy_coco = (data) => {
    console.log('buy_coco Action Called');
    return{
        type:BUY_COCO,
        data:'Coco'
    }
}
export const buy_thikshak = (data) => {
    console.log('buy_thikshak Action Called');
    return{
        type:BUY_THIKSHAK,
        data:'Thikshak'
    }
}