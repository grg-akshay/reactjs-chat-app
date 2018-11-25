import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import FriendList from '../components/FriendList';

class FriendListContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      friendList: props.friendList
    }
    this.onChangeHandler=this.onChangeHandler.bind(this);
  }

  onChangeHandler(list){
    this.setState((state) =>{
      return {
        friendList: list
      }
    })
  }

  render() {
    return (

        <FriendList 
            searchList={this.props.friendList} 
            onChange={this.onChangeHandler} 
            friendList={this.state.friendList} 
        />
    )
  }
}

FriendListContainer.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
        userid: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired
    ).isRequired
}

const mapStateToProps =(state)=>{
  return {
    friendList: state.friendList
  }
}

export default connect(mapStateToProps)(FriendListContainer);