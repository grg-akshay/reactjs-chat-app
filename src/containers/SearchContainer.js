import React, { Component } from 'react';
import Search from '../components/Search';

class SearchContainer extends Component {

      constructor(props) {
          super(props);
          this.state = {value: '' };
          this.handleChange=this.handleChange.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);
      }

      handleChange(evt){
          var list = this.props.friendList;
          if(!( /[ \] [ \\]/.test(evt.target.value))){// avoid special characters like []\
              var searchStr = evt.target.value.toLowerCase();
              if (searchStr.length >= 0) {
                list = list.filter(function (user) {
                    return user.username.toLowerCase().match(searchStr);
                });
                this.props.onChange(list);
              }
          }         
      }

      handleSubmit(evt){
          evt.preventDefault();
      }

      render() { 
          return ( 
            <Search 
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
            />
           )
      }
}

export default SearchContainer;