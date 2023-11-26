const { createStore } = require('redux')

const ADD_USERS = 'ADD_USERS'

const initialState = {
    users:['kamal'],
    count: 1,
}


const addUser =(user)=>{
    return{
        type: ADD_USERS,
        payload:user
    }
}

const userReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_USERS:
            return {
                users:[...state.users, action.payload],
                count: state.count + 1
            };
            default:
                state;

    }
}

const store = createStore(userReducer)

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(addUser('rohim'))