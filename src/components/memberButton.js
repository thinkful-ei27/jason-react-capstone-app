import React from 'react';
import { connect } from 'react-redux';
import { toggle_login, open_history } from '../actions/index.js';

export class MemberButton extends React.Component {
  render (){
    if (this.props.currentUser){
      return (
        <button
          className="header-link"
          id="custom-button"
          href="#" 
          onClick={(e)=>this.props.dispatch(open_history())}>{this.props.currentUser}</button>
      )
    } else {
      return(
        <button
          className="header-link"
          id="member-login-button"
          href="#" 
          onClick={(e)=>this.props.dispatch(toggle_login())}>Member Login</button>
      );
    }
  }
} 

function mapStateToProps(state){
  return {
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps)(MemberButton);