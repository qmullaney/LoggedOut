import React from 'react';
import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';

function CreatePost({ openModal }) {
    return (
        <input type="button" onClick={openModal} value="Start a post"/>
    )
}

const mSTP = state => ({

})

const mDTP = dispatch => ({
    openModal: () => dispatch(openModal())
})

export default connect(mSTP, mDTP)(CreatePost);