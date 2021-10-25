import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";

class Comment extends React.Component{
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        const { comment, currentUser } = this.props;
        let profileImg;

        if (currentUser.profile_url){
            profileImg = <NavLink to={`/user/${currentUser.id}`} className="pfp" > <img  src={currentUser.profile_url} alt="profile image" /></NavLink>
        }else{
            profileImg = <NavLink to={`/user/${currentUser.id}`} className="pfp" > <IoPersonCircleOutline className="empty-profile"/>  </NavLink>
        }
        return (
            <div className="comment">
                <h1>{comment.body}</h1>
            </div>
        )
    }
}

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(Comment)