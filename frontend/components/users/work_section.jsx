import { connect } from 'react-redux';
import React from 'react';
import { BsPencil } from "react-icons/bs";
import { openModal } from '../../actions/modal_actions';

class WorkSection extends React.Component {
    constructor(props){
        super(props);

    }



    render(){
        const { user, currentUser, ownProfile, openModal } = this.props;



        let edit
        if (ownProfile){
            edit = 
            <div className="edit-pencil-circle"><BsPencil onClick={() => openModal("work", currentUser)} className="edit-pencil" /> </div>
        }else{
            edit = null;
        }

        return (
            <div className="work">
                {edit}
                
                <h1>Experience</h1>
                <h2>{user.position}</h2>
                <h3>{user.company}</h3>
                <p>{user.work}</p>
            </div>
        )
    }
}

const mSTP = state => ({

})

const mDTP = dispatch => ({
    openModal: (one, two) => dispatch(openModal(one, two))
});

export default connect(mSTP, mDTP)(WorkSection)