import React from 'react';
import PropTypes from 'prop-types';

const Friend = ({listid, name}) => {
    return (
        <li listid={listid}>
            {name}
        </li>
    )
}

Friend.propTypes = {
    listid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Friend;