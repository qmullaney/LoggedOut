
import React from 'react';

import  PostFormContainer  from '../posts/post_form_container';
import ProfilePicForm from '../users/profile_pic_form';
import IntroForm from '../users/intro_form';
import AboutForm from '../users/about_form';

class Modal extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        let component;
        if (this.props.modal == "createPost"){
            let emptyPost = {body: "", imageUrl: "", imageFile: null};
            component = <PostFormContainer post={emptyPost}/>;
        }else if(this.props.modal == "editPost"){
            component = <PostFormContainer post={this.props.toEdit}/>;
        }else if( this.props.modal == 'profilePic'){
            component = <ProfilePicForm />
        }else if( this.props.modal == 'identity'){
            component = <IntroForm user={this} />
        }else if( this.props.modal == 'about'){
            component = <AboutForm user={this.props.toEdit} />
        }else{
            return null;
        } 

        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal" onClick={event => event.stopPropagation()}>
                    {
                        component
                    }
                </div>
            </div>
        )
    }
}

export default Modal;