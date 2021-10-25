import React from 'react';
import Comment from './comment_item';

class CommentSection extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            comments: {}
        }

    }

    componentDidMount(){
        $.ajax({
            method: 'GET',
            url: 'api/comments',
            data: { post_id: this.props.post.id }
        }).then(comments => this.setState({ comments}))
    }

    render(){
        for( id in this.state.comments){
            <Comment key={id} comment={this.state.comments[id]} />
        }
        return (
            <div className="comment-section">
                <div className='comment-input' >

                </div>
            </div>
        )
    }
}