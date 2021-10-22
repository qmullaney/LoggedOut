import React from 'react';
import CreatePost from './create_post';
import PostIndex from './post_index';
import { IoPersonCircleOutline } from "react-icons/io5";
import { NavLink} from 'react-router-dom';

class Feed extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        let profileImg;
        

        if (this.props.currentUser.profile_url){
            profileImg = <NavLink to={`/user/${this.props.currentUser.id}`} className="profile"> <img src={this.props.currentUser.profile_url} alt="profile image" /><h1>{this.props.currentUser.name}</h1> </NavLink>
        }else{
            profileImg = <NavLink to={`/user/${this.props.currentUser.id}`} className="profile" > <IoPersonCircleOutline className="empty-profile"/> <h1>{this.props.currentUser.name}</h1> </NavLink>
        }

        return (
            <div className="feed-main">
                <div className="left-feed">
                    <div className="user-blurb section">

                        <div className="background"></div>
                        <div className="user-info">
                            {profileImg}
                            
                            <h2>{this.props.currentUser.title}</h2>
                        </div>
                    </div>
                </div>
                <div className="middle-feed">
                <CreatePost currentUser={this.props.currentUser} />
                <PostIndex currentUser={this.props.currentUser} />
                </div>
            </div>
        )
    }
}

export default Feed;