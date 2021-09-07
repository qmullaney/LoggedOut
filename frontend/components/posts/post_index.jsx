import React from 'react';
import { connect } from 'react-redux';
import { selectAllPosts } from '../../reducers/selectors';



class PostIndex extends React.Component {
    constructor(props){
        super(props);


    }

    render (){
        let posts = this.props.allPosts;
        let liPosts = [];
        for(let i = 0; i < this.posts.length; i++){
            liPosts.push(
                <li>
                    <ShowPost post={posts[i]} id={posts[i].id}/>
                </li>
            )
        }

        <div>
            <ul>
                {posts}
            </ul>
        </div>
    }
}


const mSTP = state => ({
    allPosts: selectAllPosts(state)
})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(PostIndex);