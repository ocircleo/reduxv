//redux-thunk
//api url- https://jsonplaceholder.typicode.com/todos
//axios api

const { createStore, applyMiddleware } = require("redux")
const thunk = require('redux-thunk').default
const axios = require('axios');

//CONSTANTS
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
const GET_TODOS_FAIL = 'GET_TODOS_FAIL'
const API_URL = "https://jsonplaceholder.typicode.com/todos"


//states
const initialTodosState = {
    const: [],
    isLoading: false,
    error: null
}


//actions
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}

const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}

const getTodosFail = (error) => {
    return {
        type: GET_TODOS_FAIL,
        payload: error
    }
}

//reducer
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }

        case GET_TODOS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

//async action creator
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios.get(API_URL)
            .then(res => {
                const todos = res.data;
                const titles = todos.map(todo => todo.title)
                dispatch(getTodosSuccess(titles))
            })
            .catch(error => {
                const errorMessage = (error.message)
                dispatch(getTodosFail(errorMessage))
            })

    }
}


//store
const store = createStore(todosReducer, applyMiddleware(thunk))
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchData())
