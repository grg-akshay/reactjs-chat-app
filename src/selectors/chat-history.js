import * as util from '../utils/messageKey';

export default ({to, from, messages}) =>{
    let msgKey= util.toFromEncode(to.userid, from.userid);

    if(msgKey in messages){
        return messages[msgKey];
    }
    return null;

}
