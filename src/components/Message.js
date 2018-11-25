import React from 'react';
import PropTypes from 'prop-types';

const Message = ({data, from}) => {
    const msgType = (from === data.from.userid )
                      ? "sent"
                      : "receieved";
    return (
        <div className={"message " + msgType}>
            {data.messageText}
            <span className="metadata">
                <span className="time">{data.timestamp}</span>
            </span>
        </div>
    )
}

Message.propTypes ={
    data: PropTypes.shape({
        messageText : PropTypes.string.isRequired,
        messageid: PropTypes.string.isRequired,
        from: PropTypes.shape({ userid: PropTypes.string.isRequired, username: PropTypes.string.isRequired }),
        to: PropTypes.shape({ userid: PropTypes.string.isRequired, username: PropTypes.string.isRequired })
    }).isRequired,
    from: PropTypes.string.isRequired
}
export default Message;