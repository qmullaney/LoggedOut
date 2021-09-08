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
                
                <CreatePost />
                <PostIndex />
            </div>
        )
    }
}

export default Feed;