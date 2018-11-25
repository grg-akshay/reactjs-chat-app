import React from 'react';
import PropTypes from 'prop-types';
import SearchContainer from '../containers/SearchContainer';
import FriendsContainer from '../containers/FriendsContainer';
import '../styles/FriendList.css';

const FriendList = ({searchList, onChange, friendList}) => {
    return (
        <div className='sidebar container-border'>
            <SearchContainer friendList={searchList} onChange={onChange}/>
            <FriendsContainer friendList={friendList}/>
        </div>
    )
}

FriendList.propTypes={
    searchList: PropTypes.arrayOf(
        PropTypes.shape({
            userid: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired
        }).isRequired
        ).isRequired,
    friendList: PropTypes.arrayOf(
        PropTypes.shape({
            userid: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired
        }).isRequired
        ).isRequired,
    onChange: PropTypes.func.isRequired
}

export default FriendList;