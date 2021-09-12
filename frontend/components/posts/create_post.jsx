import React from 'react';
import { connect } from 'react-redux';
import { AiFillPicture } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";

import { openModal } from '../../actions/modal_actions';

function CreatePost({ openModal }) {
    return (
        <div className="create-post section">
            <div className="profile-button">
                <i className="profile"></i>
                <input type="button" onClick={() =>openModal("createPost")} value="Start a post"/>
            </div>
            <div className="buttons">
                <div onClick={() => openModal("createPost")}>
                  
                    <AiFillPicture className="icon blue"/>

                    <p>Photo</p>
                </div>
                
                <div onClick={() =>openModal('createPost')}>
                    <RiArticleLine className="icon pink"/>
                    <p>Write article</p>
                </div>
            </div>

        </div>
    )
}

const mSTP = state => ({

})

const mDTP = dispatch => ({
    openModal: (modal, test) => dispatch(openModal(modal, test))
})

export default connect(mSTP, mDTP)(CreatePost);