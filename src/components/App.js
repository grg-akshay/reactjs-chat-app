import React from 'react';
import FriendListContainer from '../containers/FriendListContainer';
import MessageListContainer from '../containers/MessageListContainer';
import ComposeBoxContainer from '../containers/ComposeBoxContainer';

const App = (props) => {

    return (
        <div >
            <FriendListContainer />
            <div className='right-container' >
                <MessageListContainer />
                <ComposeBoxContainer />
            </div >

        </div >
    )

}

export default App;