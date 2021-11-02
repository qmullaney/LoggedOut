import { connect } from 'react-redux';
import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsPencil } from "react-icons/bs";
import { openModal } from '../../actions/modal_actions';
import { NavLink } from 'react-router-dom';
import * as Actions from '../../util/connection_api_util';
import { fetchConnectees, fetchUsrConnections } from '../../actions/connection_actions';


class IdentitySection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            connectionStatus: "Connect"
        }
        this.handleConnect = this.handleConnect.bind(this);
    }

    componentDidMount(){

        this.props.fetchConnectees(this.props.currentUser.id).then(() => 
            this.props.fetchUsrConnections(this.props.currentUser.id)
        ).then(() => {
            if (this.props.no_returned_follows && this.props.no_returned_follows[this.props.user.id]){
                this.setState({
                    connectionStatus: "Pending"
                })
            }else if (this.props.usr_connections && this.props.usr_connections[this.props.user.id]){
                this.setState({
                    connectionStatus: 'Disconnect'
                })
            }else{
                this.setState({
                    conenctionStatus: 'Connect'
                })
            }
        })
    }

    handleConnect(e){
        e.preventDefault();

        if(this.state.connectionStatus === 'Connect'){
            Actions.createConnection(this.props.currentUser.id, this.props.user.id).then(() => 
                this.setState({
                    connectionStatus: "Pending"
                })
            )
        }else if(this.state.connectionStatus === 'Disconnect' || this.state.connectionStatus === 'Pending'){
            Actions.removeConnection(this.props.currentUser.id, this.props.user.id).then(() => 
                this.setState({
                    connectionStatus: "Connect"
                })
            )
        }
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
                    <p>{user.pronouns === null ? "" : `(${user.pronouns})` } </p>
                </div>
                <h2>{user.headline}</h2>
                <h3>{user.location === "null" ? "" : user.location }</h3>
                <NavLink className="cnxns-button" to={`/connections/${user.id}`} >Connections</NavLink>
                {this.props.user.id === this.props.currentUser.id ? "" :
                    <input type="button" value={ this.state.connectionStatus } className={`usr-cnxn ${this.state.connectionStatus} 
                conn-button${user.id === currentUser.id ? ' hide' : ""}`} onClick={this.handleConnect} />
                }
            </div>
        )
    }
}

const mSTP = state => ({
    usr_connections: state.session.CUConnections,
    no_returned_follows: state.session.connectees

})

const mDTP = dispatch => ({
    openModal: (one, two) => dispatch(openModal(one, two)),
    fetchConnectees: id => dispatch(fetchConnectees(id)),
    fetchUsrConnections: id => dispatch(fetchUsrConnections(id))
});

export default connect(mSTP, mDTP)(IdentitySection)