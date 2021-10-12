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
            first_name: this.props.user.name.split(" ")[0],
            last_name: this.props.user.name.split(" ")[1],
            headline:  this.props.user.headline,
            location: this.props.user.location,
            pronouns: this.props.user.pronouns
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        if(!this.state.first_name || !this.state.last_name || !this.state.headline){
            return 0;
        }
        
        const formData = new FormData();
        formData.set('user[id]', this.state.id);
        formData.set('user[name]', this.state.first_name + " " + this.state.last_name);
        formData.set('user[headline]', this.state.headline);
        formData.set('user[location]', this.state.location);
        formData.set('user[pronouns]', this.state.pronouns);
        
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
                <h1>Edit Intro</h1>
                <BsX className="x" onClick={this.props.closeModal} />
                <hr />
                <div className="required" >* Indicates required</div>
                <label htmlFor="fn">First Name *</label>
                <input type="text" id="fn" name="first_name" value={`${this.state.first_name}`} onChange={this.handleChange("first_name")} />
                <div className="err" >  {this.state.first_name.length === 0 ? "First name is a required field" : "" } </div>
                <label htmlFor="ln">Last Name *</label>
                <input type="text" id="ln" name="last_name" value={`${this.state.last_name}`} onChange={this.handleChange("last_name")} />
                <div className="err" >  {this.state.last_name.length === 0 ? "Last name is a required field" : "" } </div>
                    
    
                <label htmlFor="pn">Pronouns</label>
                <input type="text" id="pn" name="pronouns" value={`${this.state.pronouns || ""}`} onChange={this.handleChange("pronouns")} />
                <label htmlFor="hl">Headline * </label>
                <input type="text" id="hl" name="headline" value={`${this.state.headline || ""}`} onChange={this.handleChange("headline")} />
                <div className="err" >  {this.state.headline.length === 0 ? "Headline is a required field" : "" } </div>
                <label htmlFor="loc">Location</label>
                <input type="text" id="loc" name="location" value={`${this.state.location || ""}`} onChange={this.handleChange("location")} />
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