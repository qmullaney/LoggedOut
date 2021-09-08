import React from "react";
import { connect } from "react-redux";
import SigninAltForm from "./signin_alt";
import { login, loginDemoUser } from '../../actions/session_action'

const mSTP = state => ({
    errors: state.errors.sessionErrors
})

const mDTP = dispatch => {
    return {
        login: user => dispatch(login(user)),
        loginDemoUser: () => dispatch(loginDemoUser())
    }
}

export default connect(mSTP, mDTP)(SigninAltForm);