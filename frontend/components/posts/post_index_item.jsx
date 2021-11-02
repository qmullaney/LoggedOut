import React from 'react';
import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';
import { IoPersonCircleOutline } from "react-icons/io5";
import EditDeleteDropdown from './edit_delete_container';
import { FaRegThumbsUp,  FaThumbsUp } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import  CommentSection from '../comments/comment_section';

import { NavLink} from 'react-router-dom';

class ShowPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            liked: false,
            comment: false,
            likesNum: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    componentDidMount(){
        if (this.props.post.likes.includes(this.props.currentUser.id)){
            this.setState({
                liked: true,
                likesNum: this.props.post.likes.length
            })
        }
    }

    handleClick(e){
        e.preventDefault()

        if (this.state.liked){
            $.ajax({
                method: 'DELETE',
                url: `api/likes/1`,
                data: { liker: this.props.currentUser.id,
                        post: this.props.post.id }
            });

            this.setState({
                liked: false,
                likesNum: this.state.likesNum - 1
            });
        }else{
            $.ajax({
                method: 'POST',
                url: `api/likes`,
                data: { liker: this.props.currentUser.id,
                        post: this.props.post.id }
            });

            this.setState({
                liked: true,
                likesNum: this.state.likesNum + 1
            });
        }
    }

    handleComment(e){
        e.preventDefault();

        this.setState({
            comment: !this.state.comment
        })
    }

    render(){
        
        const { post, currentUser } = this.props;

        let image;
        if (post.photo_url){
            image = <img src={post.photo_url} alt="userimage" />
        }else {
            image = null;
        }

        let profileImg;

        if (post.author_pic){
            profileImg = <NavLink to={`/user/${post.author_id}`} className="pfp" > <img  src={post.author_pic} alt="profile image" /></NavLink>
        }else{
            profileImg = <NavLink to={`/user/${post.author_id}`} className="pfp" > <IoPersonCircleOutline className="empty-profile"/>  </NavLink>
        }
        
        let icon;
        if (this.state.liked){
            icon = <FaThumbsUp  className="thumbs-fill" />
        }else{
            icon = <FaRegThumbsUp className="thumbs-empty" />
        }

        return (
            <div className="post section">
            
                <EditDeleteDropdown currentUser={currentUser} post={post} key={post.id}  />
                <div className="post-user-header">
                    {profileImg}
                    <div className="name-title-recency" >
                        <h3>{post.name}</h3>
                        <h4>{post.author_headline}</h4>
                    </div>
                    
                </div>
                <p>{post.body}</p>
                {image}
                <h2>{this.state.likesNum} likes •  <span onClick={this.handleComment} > {post.commentNum} comments </span></h2>
                <hr />
                <div className="likes-comments">
                    <div onClick={this.handleClick}>
                        {icon}
                        <h1>Like</h1>
                    </div>
                    <div onClick={this.handleComment}>
                        <BiCommentDetail className="comment-icon" />
                        <h1>Comment</h1>
                    </div>
                </div>
                {this.state.comment ? <CommentSection post={post} currentUser={currentUser} /> : ""}
            </div>
        )
    }
}

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    openModal: (modal, toEdit) => dispatch(openModal(modal, toEdit))
})

export default connect(mSTP, mDTP)(ShowPost);