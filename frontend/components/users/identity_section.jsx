import { connect } from 'react-redux';
import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsPencil } from "react-icons/bs";
import { openModal } from '../../actions/modal_actions';

class IdentitySection extends React.Component {
    constructor(props){
        super(props);

    }



    render(){
        const { user, currentUser, ownProfile, openModal } = this.props;

        let img;

        if (user.profile_url && ownProfile){
            img = <img className="user_profile" src={user.profile_url} alt="user_profile" onClick={() => openModal("profilePic", currentUser)} />
        }else if (user.profile_url && !ownProfile){
            img = <img className="user_profile" src={user.profile_url} alt="user_profile" />
        }else if (!user.profile_url && ownProfile){
            img = <IoPersonCircleOutline className="user_profile" onClick={() => openModal("profilePic", currentUser)} />
        }else if (!user.profile_url && !ownProfile){
            img = <IoPersonCircleOutline className="user_profile" />
        }else{
            img = <div>ERROR, something in pics, id_section</div>
        }


        let edit
        if (ownProfile){
            edit = <BsPencil onClick={() => openModal("identity", currentUser)} className="edit-pencil" />
        }else{
            edit = null;
        }



        return (
            <div className="section identity">
                <img className="default-background" src="https://static-exp1.licdn.com/sc/h/5q92mjc5c51bjlwaj3rs9aa82" alt="default background" />

                {img}
                {edit}
                <h1>{user.name}</h1>
                <h2>{user.title}</h2>
                <h3>{user.area}</h3>
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