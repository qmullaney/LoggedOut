import React from 'react';
import CreatePost from './create_post';

class Feed extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Your Feed</h1>
                <CreatePost />
            </div>
        )
    }
}

export default Feed;