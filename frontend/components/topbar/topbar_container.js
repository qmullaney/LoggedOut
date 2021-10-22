import React from 'react';
import Topbar from "./topbar";

import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_action';
import { openSearch } from '../../actions/modal_actions';
import { fetchFillSearch } from '../../actions/modal_actions'

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
    openDropdown: () => dispatch(openDropdown()),
    openSearch: () => dispatch(openSearch()),
    fetchFillSearch: (inputs) => dispatch(fetchFillSearch(inputs))
})

export default connect(mSTP, mDTP)(Topbar);