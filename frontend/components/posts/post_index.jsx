import React from 'react';
import { connect } from 'react-redux';
import { selectAllPosts } from '../../reducers/selectors';
import { getAllPosts } from '../../actions/post_action';
import PostIndexItem from './post_index_item'



class PostIndex extends React.Component {
    constructor(props){
        super(props);

        
    }

    componentDidMount(){
        this.props.getPosts(this.props.currentUser.id);
    }

    render (){
        let postArr = Object.keys(this.props.posts).reverse().map(postId => {
            
            return (
                <li key={postId}>
                    <PostIndexItem post={this.props.posts[postId]}/>
                </li>
            )
        })

        return (
            <ul className="post-index section">
                <hr />
                {postArr} 
            </ul>
        )
    }
}


const mSTP = state => {
    return {
    posts: state.entities.posts
}
}

const mDTP = dispatch => ({
    getPosts: (userId) => dispatch(getAllPosts(userId))
})

export default connect(mSTP, mDTP)(PostIndex);