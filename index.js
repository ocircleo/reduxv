const { createStore } = require('redux')
//constants:
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
//define state:

const initialCounterState = {
    count: 0,
    user: ''
}

//step-2: action:  action is an object,there are two type of data i)type ii)payload(payload er kaj holo data load kora and type holo ki doroner kaj hobe seti bojai. jemon increment or decrement)

//create action for increment:
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}
//action for decrement:
const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}


//create reduce for update state,reduce will be a pure function.
//a pure function will take input state and action but must return something.
//reducer work depend on action type.If action type is increment then it will increase 1 with sate count,if action type is decrement it will be minus -1.But if there is nothing for return it will must return state.

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

        default:
            return state;
    }

}


// createStore:
// store-getState(), dispatch(), subscribe()
// 1. First, require createStore from Redux.
const store = createStore(counterReducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())






//1. state
//2. dispatch action
//3. reducer
//4. store