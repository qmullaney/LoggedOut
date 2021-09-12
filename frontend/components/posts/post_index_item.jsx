import React from 'react';
import { connect } from 'react-redux';
import { BsThreeDots } from "react-icons/bs";
import { openModal } from '../../actions/modal_actions';


function ShowPost({ post, openModal, currentUser }) {
    let image;
    if (post.photo_url){
        image = <img src={post.photo_url} alt="userimage" />
    }else {
        image = null;
    }

    let icon;
    if (post.author_id === currentUser.id){
        icon = <BsThreeDots onClick={() => openModal( "editPost", post)} className="three-dot"/>;
    }else{
        icon = null;
    }

    return (
        <div className="post section">
            {icon}
            <div className="post-user-header">
                <i className="profile"></i>
                <div className="name-title-recency" >
                    <h3>{post.name}</h3>
                    <h4>Certified Tax Evader</h4>
                    <h5>Log time ago</h5>
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