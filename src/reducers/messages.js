import * as types from '../constants/actionTypes';
import * as util from '../utils/messageKey';

const defaultState={
    friendList : [
                    {userid: '11', username: 'Bob'},
                    {userid: '12', username: 'Alpha'},
                    {userid: '13', username: 'Charlie'},
                    {userid: '14', username: 'Delta'},
                    {userid: '15', username: 'Bravo'},
                    {userid: '16', username: 'Kevin'},
                    {userid: '17', username: 'Jessy'},
                    {userid: '18', username: 'Kyle'},
                    {userid: '19', username: 'Kent'},
                    {userid: '20', username: 'Simpson'}
                ],
    from:       { userid: '10', username: 'Zack' },
    to:         { },
    messages:   { }                
};

export const messageReducer = (state = defaultState, action) =>{
    let {from , to} = state;
    let  msgKey = null;
    switch(action.type){
        case types.ADD_MESSAGE:
            msgKey = util.toFromEncode(from.userid, to.userid);
            //assuming key is always present since set_to will be called first
            let newMessageObj= {
                ...state.messages
            }
            newMessageObj[msgKey] = [...state.messages[msgKey], action.message];
                return {
                    ...state,
                    messages : newMessageObj

                }
        
        case types.SET_TO:
            let { friendList : userList, messages : messageList } = state;
            let obj = null;
            for(let i=0; i<userList.length; i++){
                if(userList[i].userid === action.to){
                    obj = userList[i];
                    break;
                }
            }
            msgKey = util.toFromEncode(from.userid, obj.userid);
            if( !(msgKey in  messageList) ){
                let messages = { ...messageList }
                messages[msgKey] = []; 
                return {
                    ...state,
                    to: obj,
                    messages    
                }
            }
            else{
                return {
                    ...state,
                    to: obj,
                }
            }
        default:
            return state;
    }
}