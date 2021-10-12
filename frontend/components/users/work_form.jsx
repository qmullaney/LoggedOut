import React from 'react';
import { connect } from 'react-redux';
import { editUser } from '../../actions/user_actions';
import { closeModal } from '../../actions/modal_actions';
import { BsX } from "react-icons/bs";

class WorkForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            id: this.props.user.id,
            title: this.props.user.position,
            company: this.props.user.company,
            work: this.props.user.work
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        if(!this.state.title || !this.state.company ){
            return 0;
        }
        
        const formData = new FormData();
        formData.set('user[id]', this.state.id);
        formData.set('user[position]', this.state.title);
        formData.set('user[company]', this.state.company);
        formData.set('user[work]', this.state.work);
        
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
                <div className="required" >* Indicates required</div>

                <label htmlFor="fn">Title *</label>
                <input type="text" id="fn" name="title" value={`${this.state.title || ""}`} onChange={this.handleChange("title")} />
                <div className="err" >  {!this.state.title ? "Title is a required field" : "" } </div>

                <label htmlFor="cn">Company name *</label>
                <input type="text" id="cn" name="company" value={`${this.state.company || ""}`} onChange={this.handleChange("company")} />
                <div className="err" >  {!this.state.company ? "Company is a required field" : "" } </div>


                <label >Description</label>
                <textarea className="textarea" placeholder="" 
                           value={this.state.work || ""} 
                           onChange={this.handleChange("work")}>
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


export default connect(mSTP, mDTP)(WorkForm);