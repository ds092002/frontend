const redux = require('redux');

const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buy_cake() {
    return {
        type: BUY_CAKE
    };
}

function buy_icecream() {
    return {
        type: BUY_ICECREAM
    };
}

const initialState = {
    numOfCake: 10,
    numOfIceCream: 20,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCake: state.numOfCake - 1
            };
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

console.log('Initial State:', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated State:', store.getState()));

store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_icecream());

unsubscribe();
