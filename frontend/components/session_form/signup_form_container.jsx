import React from "react";
import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { signup } from '../../actions/session_action'


const mSTP = state => ({

})

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SignupForm);