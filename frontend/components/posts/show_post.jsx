import React from 'react';
import { connect } from 'react-redux';

import { tbd } from '../../actions/modal_actions';


function ShowPost({ post }) {
    return (
        <div>
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