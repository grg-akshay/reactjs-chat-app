import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend';

const Friends = ({chooseFriend, friendList, to}) =>{
    return (
          <nav  onClick={(evt) =>{
            chooseFriend(evt, to);
          }}>
            <ul className="scrollable container-height">
              {friendList.length!==0 
                ? 
                friendList.map((friend) =>{
                  return  <Friend 
                            name={friend.username} 
                            key={friend.userid} 
                            listid={friend.userid} 
                          />
                }) 
                :
                <p>No user found</p>}
            </ul>
          </nav>
    )
}

Friends.propTypes={
  chooseFriend: PropTypes.func.isRequired,
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
        userid: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired
    ).isRequired,
  to: PropTypes.string
}

export default Friends;