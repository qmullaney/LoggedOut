import React from 'react';
import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';
import { IoPersonCircleOutline } from "react-icons/io5";
import EditDeleteDropdown from './edit_delete_container'

function ShowPost({ post, currentUser }) {
    let image;
    if (post.photo_url){
        image = <img src={post.photo_url} alt="userimage" />
    }else {
        image = null;
    }

    let profileImg;

        if (post.author_pic){
            profileImg = <i className="pfp" > <img  src={post.author_pic} alt="profile image" /></i>
        }else{
            profileImg = <i className="pfp" > <IoPersonCircleOutline className="empty-profile"/>  </i>
        }

    return (
        <div className="post section">
          
            <EditDeleteDropdown currentUser={currentUser} post={post} key={post.id}  />
            <div className="post-user-header">
                {profileImg}
                <div className="name-title-recency" >
                    <h3>{post.name}</h3>
                    <h4>{post.author_headline}</h4>
                </div>
                
            </div>
            <p>{post.body}</p>
            {image}
        </div>
    )
}

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    openModal: (modal, toEdit) => dispatch(openModal(modal, toEdit))
})

export default connect(mSTP, mDTP)(ShowPost);