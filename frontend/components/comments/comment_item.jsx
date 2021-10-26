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

        if (comment.commenter_pic){
            profileImg = <NavLink to={`/user/${comment.commenter_id}`} className="pfp" > <img  src={comment.commenter_pic} alt="profile image" /></NavLink>
        }else{
            profileImg = <NavLink to={`/user/${comment.commenter_id}`} className="pfp" > <IoPersonCircleOutline className="empty-profile"/>  </NavLink>
        }
        return (
            <div className="comment">
                {profileImg}
                <div>

                    <h1>{comment.commenter_name}</h1>
                    <h2>{comment.commenter_pronouns}</h2>
                    <p>{comment.body}</p>
                </div>
            </div>
        )
    }
}

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(Comment)