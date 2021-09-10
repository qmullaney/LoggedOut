
import React from 'react';


import  PostFormContainer  from '../posts/post_form_container';

class Modal extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        let component;
        if (!this.props.modal){
            return null;
        }else if (this.props.modal == "createPost"){
            component = <PostFormContainer />;
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