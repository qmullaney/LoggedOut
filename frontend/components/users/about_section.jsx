import { connect } from 'react-redux';
import React from 'react';
import { BsPencil } from "react-icons/bs";
import { openModal } from '../../actions/modal_actions';

class AboutSection extends React.Component {
    constructor(props){
        super(props);

    }



    render(){
        const { user, currentUser, ownProfile, openModal } = this.props;



        let edit
        if (ownProfile){
            edit = 
            <div className="edit-pencil-circle"><BsPencil onClick={() => openModal("identity", currentUser)} className="edit-pencil" /> </div>
        }else{
            edit = null;
        }



        return (
            <div className="identity">
                {edit}
                
                <h2>About</h2>
                <p>{user.about}</p>
            </div>
        )
    }
}

const mSTP = state => ({

})

const mDTP = dispatch => ({
    openModal: (one, two) => dispatch(openModal(one, two))
});

export default connect(mSTP, mDTP)(AboutSection)