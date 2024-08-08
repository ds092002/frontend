const redux = require ('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore

const BUY_ICECREAM = 'BUY_ICECREAM'
const BUY_CAKE = 'BUY_CAKE'

function buy_icecream() {
    return{
        type:BUY_ICECREAM,
        info:'First redux Action'
    }
}
function buy_cake() {
    return{
        type:BUY_CAKE,
        info:'First redux Action'
    }
}

const initialState = {
    numOfIcecream : 10,
}
const initialState2 = {
    
    numOfCake : 10
}

const reducer1 = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:return{
                numOfIcecream:state.numOfIcecream - 1
            }    
        default:return state
    }
}
const reducer2 = (state = initialState2, action) => {
    switch (action.type) {
        case BUY_CAKE:return{
                numOfCake:state.numOfCake - 1
            }    
        default:return state
    }
}

const store = createStore(reducer1)
const store2 = createStore(reducer2)


console.log('InitialState', store.getState());
console.log('InitialState', store2.getState());

const unsubscribe = store.subscribe(() => console.log('Update State', store.getState())
)
const unsubscribe2 = store2.subscribe(() => console.log('Update State', store2.getState())
)

store.dispatch(buy_icecream())
store.dispatch(buy_icecream())
store.dispatch(buy_icecream())

store2.dispatch(buy_cake())
store2.dispatch(buy_cake())
store2.dispatch(buy_cake())

unsubscribe()
unsubscribe2()