import React from 'react';
import { AiFillPicture } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";

class PostForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.post.id,
            body: this.props.post.body,
            author_id: '',
            imageUrl: this.props.post.photo_url,
            imageFile: null,
            bodyError: ''
        };

        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddImage = this.handleAddImage.bind(this);
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        });
    };

    handleSubmit(e){
        e.preventDefault();
        
        // this.setState({author_id: this.props.currentUser.id});
        
        // this.props.submitFormPost(this.state);

        const formData = new FormData();
        formData.set('post[body]', this.state.body);
        formData.set('post[author_id]', this.props.currentUser.id);
        if (this.props.toEdit){
            formData.set('post[id]', this.state.id);
        }
        


        if (this.state.imageFile) {
            formData.append('post[photo]', this.state.imageFile);
        }
      
        if (this.props.toEdit){
            this.props.editFormPost({form: formData, postId: this.state.id});
        }else{
            this.props.submitFormPost(formData);
        }

        if(this.state.body.length !== 0){
            this.props.closeModal();
        }
    }

    handleAddImage(e){
        
        const reader = new FileReader();

        const file = e.currentTarget.files[0];

      
        
        reader.onloadend = () => this.setState({ imageUrl: reader.result, imageFile: file });
        
        if (file) {
            reader.readAsDataURL(file);
        }else {
            this.setState({ imageUrl: "", imageFile: null });
        }
        
    }

    render(){
        let img;
        if (this.state.imageUrl){
            
            img = <img src={this.state.imageUrl} alt="uploadedpic" className="uploaded-image"/>
            
        }else{
            img = null;
        }

        let invalid = "";

        if (this.state.body.length === 0 && !this.state.imageFile){
            invalid = "invalid";
        }

        let profileImg;

        if (this.props.currentUser.profile_url){
            profileImg = <i className="pfp" > <img  src={this.props.currentUser.profile_url} alt="profile image" /></i>
        }else{
            profileImg = <i className="pfp" > <IoPersonCircleOutline className="empty-profile"/>  </i>
        }


        return (
           
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.modal == "createPost" ? "Create" : "Edit"} a Post</h1>
                <hr />

                <div className="post-user-header">
                    {profileImg}
                    <div className="name-title-recency" >
                        <h3>{this.props.currentUser.name}</h3>
                        <h4>{this.props.currentUser.headline}</h4>
                    </div>
                
                </div>
                
                <textarea  placeholder="What do you want to talk about?" 
                           value={this.state.body} 
                           onChange={this.update("body")}>
                </textarea>

                <div className="imgimg">
                    {img}

                </div>
                
                <div className="bottom">
                    <label htmlFor="gabagool" className="file-input"><AiFillPicture/></label>
                    <input id="gabagool"  type="file" name="file" onChange={this.handleAddImage}/>

                    <input className={`post-button ${invalid}`} type="submit" value="Post"/>
                    
                </div>
                
            </form>
        )
    }
}

export default PostForm;