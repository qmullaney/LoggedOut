import React from 'react';
import Topbar from "./topbar";

import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_action';

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
    openDropdown: () => dispatch(openDropdown())
})

export default connect(mSTP, mDTP)(Topbar);