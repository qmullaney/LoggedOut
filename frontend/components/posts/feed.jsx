import React from 'react';
import CreatePost from './create_post';
import PostIndex from './post_index';

class Feed extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="feed-main">
                <div className="left-feed">
                    <div className="user-blurb section">

                        <div className="background"></div>
                        <div className="user-info">
                            <i className="profile"></i>
                            <h1>Name</h1>
                            <h2>title title title title title title</h2>
                        </div>
                    </div>
                </div>
                <div className="middle-feed">
                <CreatePost />
                <PostIndex />
                </div>
            </div>
        )
    }
}

export default Feed;