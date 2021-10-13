import React from 'react';
import { connect } from 'react-redux';
import { AiFillPicture } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";

import { NavLink} from 'react-router-dom';

import { openModal } from '../../actions/modal_actions';

function CreatePost({ openModal, currentUser }) {


    let profileImg;
        

        if (currentUser.profile_url){
            profileImg = <NavLink to={`/user/${currentUser.id}`} className="pfp"> <img src={currentUser.profile_url} alt="profile image" /> </NavLink>
        }else{
            profileImg = <NavLink to={`/user/${currentUser.id}`} className="pfp" > <IoPersonCircleOutline className="empty-profile"/> </NavLink>
        }

    return (
        <div className="create-post section">
            <div className="profile-button">
                {profileImg}
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