import { BUY_COCO, BUY_THIKSHAK } from "./Constant";

// Action for buying Coco
export const buy_coco = () => {
    console.log('buy_coco Action Called');
    return {
        type: BUY_COCO, // Dispatch action type
        data: 'Coco' // Optional data for debugging
    }
}

// Action for buying ThikShak
export const buy_thikshak = () => {
    console.log('buy_thikshak Action Called');
    return {
        type: BUY_THIKSHAK, // Dispatch action type
        data: 'Thikshak' // Optional data for debugging
    }
}
