import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import '../styles/MessageList.css';
import '../styles/index.css';

const MessageList = ({friendName, messages, me}) => {
    return (
        <section className='message-container scrollable'>
            <div className='message-container__title container-border__bottom'>
                {friendName}
            </div>
            {
              messages && messages.map((message) => {
                return <Message key ={message.messageid} data={message} from={me}/>
              })
            }
        </section>
    )
}

MessageList.propTypes={
    friendName: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
        messageText : PropTypes.string.isRequired,
        messageid: PropTypes.string.isRequired,
        from: PropTypes.shape({ userid: PropTypes.string.isRequired, username: PropTypes.string.isRequired }),
        to: PropTypes.shape({ userid: PropTypes.string.isRequired, username: PropTypes.string.isRequired })
    }).isRequired
    ).isRequired,
    me: PropTypes.string.isRequired
}

export default MessageList;
