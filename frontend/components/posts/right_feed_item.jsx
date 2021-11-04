import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";
import * as Actions from '../../util/connection_api_util';

class ConnectionsItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            connectionStatus: "Connect"
        }
        this.handleConnect = this.handleConnect.bind(this);
    }


    handleConnect(e){
        e.preventDefault();

        if(this.state.connectionStatus === 'Connect'){
            Actions.createConnection(this.props.currentUser.id, this.props.user.id).then(() => 
                this.setState({
                    connectionStatus: "Done"
                })
            )
        }
    }



    render(){
        if (this.state.connectionStatus === 'Done'){
            return null;
        }
        const { user, currentUser } = this.props;

        let profileImg;
        

        if (user.profile_url){
            profileImg = <NavLink to={`/user/${user.id}`} className="pfp" > <img  src={user.profile_url} alt="profile image" /></NavLink>
        }else{
            profileImg = <NavLink to={`/user/${user.id}`} className="pfp" > <IoPersonCircleOutline className="empty-profile"/>  </NavLink>
        }

        
        return(
            <div className="connection-item">
                <div className="left" >
                    {profileImg}
                    
                    <div className="name-about">
                        <h1>{user.name}</h1>
                        <h2>{user.headline}</h2>
                        <h3>{user.location === "null" || user.location === null ? "" : user.location}</h3>
                    </div>
                </div>
                <input type="button" value={ this.state.connectionStatus } className={`${this.state.connectionStatus} conn-button${user.id === currentUser.id ? ' hide' : ""}`} onClick={this.handleConnect} />
                <hr />
            </div>
        )
    }
}

const mSTP = state => ({
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(ConnectionsItem);