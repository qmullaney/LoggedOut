import React from 'react';
import Topbar from "./topbar";

import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';

const mSTP = state => {
    return {

        currentUser: state.entities.users[state.session.id]
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
})

export default connect(mSTP, mDTP)(Topbar);