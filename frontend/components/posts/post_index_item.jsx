import React from 'react';
import { connect } from 'react-redux';


function ShowPost({ post }) {
    return (
        <div className="post section">
            <h3>{post.user}</h3>
            <p>{post.body}</p>
        </div>
    )
}

const mSTP = state => ({

})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(ShowPost);