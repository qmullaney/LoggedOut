import React from 'react';
import { connect } from 'react-redux';
import Comment from './comment_item';
import { IoPersonCircleOutline } from "react-icons/io5";
import { NavLink} from 'react-router-dom';

class CommentSection extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            comments: {},
            input: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePost = this.handlePost.bind(this);

    }

    componentDidMount(){
        $.ajax({
            method: 'GET',
            url: 'api/comments',
            data: { post_id: this.props.post.id }
        }).then(comments => this.setState({ comments}))
    }

    handlePost(e){
        e.preventDefault();

        $.ajax({
            method: 'POST',
            url: 'api/comments',
            data: { post_id: this.props.post.id, commenter_id: this.props.currentUser.id, body: this.state.input }
        }).then( comment => this.setState({ comments: Object.assign({}, this.state.comments, { [comment.id]: comment }), input: ""}))

    }

    handleChange(e){
        this.setState({
            input: e.target.value
        })
    }

    render(){
        const { currentUser, post } = this.props;
        let comments = [];
        let order = Object.keys(this.state.comments).sort().reverse();
        order.forEach(id => {
            comments.push(<Comment key={id} comment={this.state.comments[id]}  currentUser={currentUser} />)
        })
        

        let profileImg;

        if (currentUser.profile_url){
            profileImg = <NavLink to={`/user/${currentUser.id}`} className="pfp" > <img  src={currentUser.profile_url} alt="profile image" /></NavLink>
        }else{
            profileImg = <NavLink to={`/user/${currentUser.id}`}  > <IoPersonCircleOutline className="empty-profile"/>  </NavLink>
        }

        let postButton = <input type="button" className="post-comment" value="Post" onClick={this.handlePost} />;

        return (
            <div className="comment-section">
                <div className='comment-input' >
                    {profileImg}
                    <div className="input-container" >
                        <label >{this.state.input ? "" : "Add a comment..." }</label>
                        <input type="text" onChange={this.handleChange} value={this.state.input} />
                    </div>
                </div>
                {this.state.input ? postButton : "" }
                {comments}
            </div>
        )
    }
}

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(CommentSection);