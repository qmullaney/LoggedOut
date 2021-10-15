import { connect } from 'react-redux';
import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsPencil } from "react-icons/bs";
import { openModal } from '../../actions/modal_actions';
import { NavLink } from 'react-router-dom';

class IdentitySection extends React.Component {
    constructor(props){
        super(props);

    }



    render(){
        const { user, currentUser, ownProfile, openModal } = this.props;

        let img;
        
        if (!!user.profile_url && ownProfile){
            img = <img className="user-profile" src={user.profile_url} alt="user-profile" onClick={() => openModal("profilePic", currentUser)} />
        }else if (!!user.profile_url && !ownProfile){
            img = <img className="user-profile" src={user.profile_url} alt="user-profile" />
        }else if (!user.profile_url && ownProfile){
            img = <IoPersonCircleOutline className="user-profile" onClick={() => openModal("profilePic", currentUser)} />
            
        }else if (!user.profile_url && !ownProfile){
            img = <IoPersonCircleOutline className="user-profile" />
        }else{
            img = <div>ERROR, something in pics, id_section</div>
        }


        let edit
        if (ownProfile){
            edit = 
            <div className="edit-pencil-circle"><BsPencil onClick={() => openModal("identity", currentUser)} className="edit-pencil" /> </div>
        }else{
            edit = null;
        }



        return (
            <div className="identity">
                <img className="default-background" src="https://static-exp1.licdn.com/sc/h/5q92mjc5c51bjlwaj3rs9aa82" alt="default background" />

                {img}
                {edit}
                <div className="name-pro" >
                    <h1>{user.name} </h1>
                    <p>{user.pronouns ? `(${user.pronouns})` : ""} </p>
                </div>
                <h2>{user.headline}</h2>
                <h3>{user.location || ""}</h3>
                <NavLink to={`/connections/${user.id}`} > Click</NavLink>
            </div>
        )
    }
}

const mSTP = state => ({

})

const mDTP = dispatch => ({
    openModal: (one, two) => dispatch(openModal(one, two))
});

export default connect(mSTP, mDTP)(IdentitySection)