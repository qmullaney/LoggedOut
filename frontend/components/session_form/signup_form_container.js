import React from "react";
import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { signup, loginDemoUser } from '../../actions/session_action'


const mSTP = state => ({
    errors: state.errors.newUserError 
})

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user)),
    loginDemoUser: () => dispatch(loginDemoUser())
})

export default connect(mSTP, mDTP)(SignupForm);