import React from 'react';
import { connect } from 'react-redux';
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import { IoPersonCircleOutline } from "react-icons/io5";

function SearchItem({ closeSearch, user }){

    let profileImg;

    if (user.profile_url){
        profileImg =  <img className="filled-profile"  src={user.profile_url} alt="profile image" />
    }else{
        profileImg =  <IoPersonCircleOutline className="empty-profile-search"/>  
    }

    return(
        <NavLink className="search-item" to={`/user/${user.id}`} onClick={() => closeSearch()} >
            <div>

                <FaSearch className="fasearch" />
                <h1>{user.name} </h1>
            </div>
            {profileImg}
        </NavLink>
    )
}

const mSTP = state => ({
    
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(SearchItem);