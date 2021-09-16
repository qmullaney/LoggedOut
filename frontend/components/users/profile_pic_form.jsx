import { connect } from 'react-redux';
import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsX, BsTrashFill, BsPencil } from "react-icons/bs";
import { closeModal } from '../../actions/modal_actions';
import { editUser } from '../../actions/user_actions'

class ProfilePicForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.toEdit.id,
            imageUrl: this.props.toEdit.imageUrl,
            imageFile: this.props.toEdit.imageFile
        }

        this.handlePicture = this.handlePicture.bind(this);
        this.deleteProfilePic = this.deleteProfilePic.bind(this);
    }

    handlePicture(e){
        e.preventDefault();

        
        const file = e.currentTarget.files[0];
        
        if (file){
            const formData = new FormData();
            formData.set('user[id]', this.state.id);
            
            this.setState({ imageFile: file });
            formData.set('user[photo]', file)

            
            this.props.editUser({form: formData, userId: this.state.id});

            this.props.closeModal();
        }


    }

    deleteProfilePic(e){
        e.preventDefault();

        const formData = new FormData();
        
        
        
        formData.set('user[photo]', "empty")
        this.props.editUser({form: formData, userId: this.state.id});
    

        this.props.closeModal();
    }

    render(){
        let img;
        if (this.props.toEdit.profile_url){
            img = <img src={ this.props.toEdit.profile_url } alt="profile image" className="im"/> ;
        }else{
            img = <IoPersonCircleOutline className="im" />
        }
        return (
            <div className="pf-modal">
                <h1>Profile Photo</h1>
                {img}

                <BsX className="x" onClick={this.props.closeModal}/>

                <hr />

                <div className="button-bar">
                    <label className="pf-button" htmlFor="profile-file-input">
                        <BsPencil />
                        <h2>Edit</h2>
                    </label>
                    <input onChange={this.handlePicture}  type="file" id="profile-file-input" name="file" />

                    <div className="pf-button" onClick={this.deleteProfilePic}  >
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
    editUser: input => dispatch(editUser(input)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(ProfilePicForm);