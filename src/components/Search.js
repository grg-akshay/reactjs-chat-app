import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Search.css';

const Search = ({handleSubmit, handleChange}) => {
    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="lala"
                    onChange={handleChange}
                    className='search'
                    placeholder='Search'/>
            </form>
        </div>
    )
}

Search.propTypes ={
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}
        
export default Search;