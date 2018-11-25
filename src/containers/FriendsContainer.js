import Friends from '../components/Friends';
import { setTo } from '../actions/users';
import {connect} from 'react-redux';


const mapStateToProps =(state)=>({
    to: state.to.userid
});

const mapDispatchToProps =(dispatch) =>({
  chooseFriend: (evt,to) =>{
                  if(to!==evt.target.getAttribute('listid')){
                    dispatch(setTo(evt.target.getAttribute('listid')))
                  }
                }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Friends); 