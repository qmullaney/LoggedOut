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
        
        this.props.submitFormPost(post);
        if(this.state.body.length !== 0){
            this.props.closeModal();
        }else{
            this.props.openModal();
        }
    }

    render(){
        return (
           
            <form onSubmit={this.handleSubmit}>
                <h1>Create a Post</h1>
                <hr />

                <div className="post-user-header">
                    <i className="profile"></i>
                    <div className="name-title-recency" >
                        <h3>{this.props.currentUser.name}</h3>
                        <h4>Certified Tax Evader</h4>
                        <h5>Log time ago</h5>
                    </div>
                
                </div>
                
                <textarea  placeholder="What do you want to talk about?" value={this.state.body} onChange={this.update("body")}></textarea>
                
                <input type="submit" value="Post"/>
            </form>
        )
    }
}

export default PostForm;