import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";

class ConnectionsItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            connectionStatus: false
        }
    }

    render(){
        const { user, currentUser } = this.props;
        
        let profileImg;

        if (post.author_pic){
            profileImg = <NavLink to={`/user/${user.id}`} className="pfp" > <img  src={user.profile_url} alt="profile image" /></NavLink>
        }else{
            profileImg = <NavLink to={`/user/${user.id}`} className="pfp" > <IoPersonCircleOutline className="empty-profile"/>  </NavLink>
        }
        return(
            <div className="connection-item">
                {profileImg}
                <div className="name-about">
                    <h1>{user.name}</h1>
                    <h2>{user.headline}</h2>
                    <h3>{user.location}</h3>
                </div>
                <input type="button" value={ this.state.connectionStatus } className={`${this.state.connectionStatus}-button`} />

            </div>
        )
    }
}

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(ConnectionsItem);