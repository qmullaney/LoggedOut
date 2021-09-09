import React from 'react';
import { connect } from 'react-redux';


function ShowPost({ post }) {
    return (
        <div className="post section">
            <div className="post-user-header">
                <i className="profile"></i>
                <div className="name-title-recency" >
                    <h3>{post.name}</h3>
                    <h4>Certified Tax Evader</h4>
                    <h5>Log time ago</h5>
                </div>
                
            </div>
            <p>{post.body}</p>
        </div>
    )
}

const mSTP = state => ({

})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(ShowPost);