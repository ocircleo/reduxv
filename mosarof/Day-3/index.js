const { createStore, combineReducers } = require("redux")

const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'

const GET_CART = 'GET_CART'
const ADD_CART = 'ADD_CART'

//state for product
const initialProductState = {
    products: ['mango', 'banana'],
    countOfProducts: 2
}
//state for cart
const initialCartState = {
    itemsOfCart: ['Book'],
    countOfCartItems: 1
}

//action for product

const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
//action for cart

const getCartItems = () => {
    return {
        type: GET_CART
    }
}

const addCartItem = (item) => {
    return {
        type: ADD_CART,
        payload: item
    }
}

//reducer for product
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }

        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                countOfProducts: state.countOfProducts + 1
            }

        default:
            return state;
    }

}
//reducer for product
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state
            }

        case ADD_CART:
            return {
                products: [...state.itemsOfCart, action.payload],
                countOfProducts: state.countOfCartItems + 1
            }

        default:
            return state;
    }

}

//reducer combined
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

//store for product
const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(getProducts())
store.dispatch(addProduct('Apple'))

store.dispatch(getCartItems())
store.dispatch(addCartItem('pen'))




