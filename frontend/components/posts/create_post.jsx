import React from 'react';
import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';

function CreatePost({ openModal }) {
    return (
        <div>
            <div>
                <img src="/notsure" alt="" />
                <input type="button" onClick={openModal} value="Start a post"/>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                    <p>Photo</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Video</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Write and article</p>
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