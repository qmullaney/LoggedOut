import React from 'react';
import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';

function CreatePost({ openModal }) {
    return (
        <div className="create-post section">
            <div className="profile-button">
                <i className="profile"></i>
                <input type="button" onClick={openModal} value="Start a post"/>
            </div>
            <div className="buttons">
                <div>
                
                    <p>Photo</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Video</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Write an article</p>
                </div>
            </div>

        </div>
    )
}

const mSTP = state => ({

})

const mDTP = dispatch => ({
    openModal: () => dispatch(openModal())
})

export default connect(mSTP, mDTP)(CreatePost);