import * as types from '../constants/actionTypes';

export const addMessage=(message) =>({
    type: types.ADD_MESSAGE,
    message
})

export const thunkAddMessage =(message) =>{
    return (dispatch, getState, send) =>{ 
        /*The return function will receive send as an argument too 
        since its passed as an argument to thunk.withExtraArgument()*/
        dispatch(addMessage(message));
        send(addMessage(message));
    }

}