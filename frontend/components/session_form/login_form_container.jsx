import React from "react";
import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login } from '../../actions/session_action'

const mSTP = state => ({

})

const mDTP = dispatch => {
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(LoginForm);