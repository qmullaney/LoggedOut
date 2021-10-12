import React from 'react';
import { connect } from 'react-redux';
import { editUser } from '../../actions/user_actions';
import { closeModal } from '../../actions/modal_actions';
import { BsX } from "react-icons/bs";

class EduForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            id: this.props.user.id,
            education: this.props.user.education,
            edu_about: this.props.user.edu_about
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        if(!this.state.education ){
            return 0;
        }
        
        const formData = new FormData();
        formData.set('user[id]', this.state.id);
        formData.set('user[education]', this.state.education);
        formData.set('user[edu_about]', this.state.edu_about);
        
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
                <h1>Edit education</h1>
                <BsX className="x" onClick={this.props.closeModal} />
                <hr />
                <div className="required" >* Indicates required</div>

                <label htmlFor="fn">School *</label>
                <input type="text" id="fn" name="education" value={`${this.state.education || ""}`} onChange={this.handleChange("education")} />
                <div className="err" >  {!this.state.education ? "Education is a required field" : "" } </div>

                

                <label >Description</label>
                <textarea className="textarea" placeholder="" 
                           value={this.state.edu_about || ""} 
                           onChange={this.handleChange("edu_about")}>
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


export default connect(mSTP, mDTP)(EduForm);