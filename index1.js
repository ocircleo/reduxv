
//1. state-count:0
//2. action- increment,decrement,reset
//3. reducer
//4. store

const { createStore } = require("redux")

//constants
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

//step-1(state)
const initialCounterState = {
    count: 0
}


//step-2(action)
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}


const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

const resetCounter = () => {
    return {
        type: RESET
    }
}


//step-3(reducer)
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }

        default:
            state;
    }
}

//step-4(store)
const store = createStore(counterReducer)
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(resetCounter())
store.dispatch(incrementCounter())
