import React from 'react';
import { connect } from 'react-redux';
import { editUser } from '../../actions/user_actions';
import { closeModal } from '../../actions/modal_actions';
import { BsX } from "react-icons/bs";

class IntroForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            id: this.props.user.id,
            about: this.props.user.about || ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        
        const formData = new FormData();
        formData.set('user[id]', this.state.id);
        formData.set('user[about]', this.state.about);
        
        this.props.editUser({form: formData, userId: this.state.id});
        this.props.closeModal();
    }

    handleChange(field){
        return e=>this.setState({
            [field]: e.target.value
        })
    }

    render(){
       
        return (
            <form onSubmit={this.handleSubmit} className="intro-form" >
                <h1>Edit About</h1>
                <BsX className="x" onClick={this.props.closeModal} />
                <hr />
                <label >Description</label>
                <textarea className="textarea" placeholder="You can write about your years of experience, industry, or skill. People also talk about their achievements or previous job experiences." 
                           value={this.state.about || ""} 
                           onChange={this.handleChange("about")}>
                </textarea>
    
                <hr />
                <div className="save">
                    <input type="submit" value="Save"  />
                </div>
            </form>
        )
    }
}

const mSTP = state => ({
    user: state.ui.toEdit
})
const mDTP = dispatch => ({
    editUser: user => dispatch(editUser(user)),
    closeModal: () => dispatch(closeModal()),
})


export default connect(mSTP, mDTP)(IntroForm);