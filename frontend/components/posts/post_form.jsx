import React from 'react';

class PostForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            body: '',
            author_id: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        });
    };

    handleSubmit(e){
        e.preventDefault();
        let post = Object.assign({}, this.state, { author_id: this.props.currentUser.id});
        this.props.submitFormPost(post).then(this.props.closeModel);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Create a Post
                    <br />
                    <label>What do you want to talk about?
                        <input type="text" value={this.state.body} onChange={this.update("body")}/>
                    </label>
                    <br />
                    <input type="submit" value="Post"/>
                </form>
            </div>
        )
    }
}

export default PostForm;