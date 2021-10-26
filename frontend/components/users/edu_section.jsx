import { connect } from 'react-redux';
import React from 'react';
import { BsPencil } from "react-icons/bs";
import { openModal } from '../../actions/modal_actions';

class EduSection extends React.Component {
    constructor(props){
        super(props);

    }



    render(){
        const { user, currentUser, ownProfile, openModal } = this.props;



        let edit
        if (ownProfile){
            edit = 
            <div className="edit-pencil-circle"><BsPencil onClick={() => openModal("edu", currentUser)} className="edit-pencil" /> </div>
        }else{
            edit = null;
        }
        return (
            <div className="edu">
                {edit}
                
                <h1>Education</h1>
                <h2>{user.education}</h2>
                <p>{user.edu_about === "null" ? "" : user.edu_about}</p>
            </div>
        )
    }
}

const mSTP = state => ({

})

const mDTP = dispatch => ({
    openModal: (one, two) => dispatch(openModal(one, two))
});

export default connect(mSTP, mDTP)(EduSection)