import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ComposeBox.css';

const ComposeBox = ({handleSubmit, handleChange, value}) => {
    return (
        <form onSubmit={handleSubmit} className="padded-container">
            <input
                type="text"
                placeholder="Type a message"
                value={value}
                onChange={handleChange}
                className="search"/>
            <button className='fill'>
                <i className="fa fa-send-o"></i>
            </button>
        </form>
    )
}

ComposeBox.propTypes ={
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default ComposeBox;
