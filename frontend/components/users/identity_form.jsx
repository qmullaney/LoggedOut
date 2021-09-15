import { connect } from 'react-redux';
import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsX, BsTrashFill, BsPencil } from "react-icons/bs";
import closeModal from '../../actions/modal_actions';
import { editUser } from '../../actions/user_actions'

class IdentityForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.toEdit.id,
            imageUrl: this.props.toEdit.imageUrl,
            imageFile: this.props.toEdit.imageFile
        }

        this.handlePicture = this.handlePicture.bind(this);
    }

    handlePicture(e){
        e.preventDefault();

        
        const file = e.currentTarget.files[0];
        
        if (file){
            const formData = new FormData();
            formData.set('user[id]', this.state.id);
            
            this.setState({ imageFile: file });
            formData.set('user[photo]', this.state.imageFile)
            this.props.editUser({form: formData, userId: this.state.id});
        }


    }

    render(){
        return (
            <div className="pf-modal">
                <h1>Profile Photo</h1>
                <img src={ this.props.toEdit.user.profile_url } alt="profile image" /> 

                <BsX className="x"/>

                <hr />

                <div className="button-bar">
                    <div className="pf-button">
                        <BsPencil />
                        <h2>Edit</h2>
                    </div>
                    <div className="pf-button">
                        <BsTrashFill />
                        <h2>Delete</h2>
                    </div>
                </div>
            </div>
        )
    }
}

const mSTP = state => ({
    toEdit: state.ui.toEdit
});

const mDTP = dispatch => ({
    editUser: input => dispatch(editUser(input))
});

export default connect(mSTP, mDTP)(IdentityForm);