import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillHome, AiFillLinkedin } from "react-icons/ai";

class Topbar extends React.Component {
    constructor(props){
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        this.props.logout();
    }

    render(){
        const signedOut = <nav className="session-nav">
            <div>

            <Link className="home-logo" onClick={this.props.clearErrors} to="/"></Link>
        
            <Link className="join-now" onClick={this.props.clearErrors} to="/signup">Join now</Link>
        
            <Link className= "sign-in" onClick={this.props.clearErrors} to="/signin">Sign in</Link>
        
            </div>
            
        </nav>;

        const signedIn = <nav className="nav">
            <AiFillLinkedin className="ln"/>
            <div className="nav-buttons" >
                <NavLink activeClassName="selected" className="home" to="/feed">
                    <AiFillHome className="home-icon" />
                    <h4>Home</h4>
                </NavLink>
                <NavLink activeClassName="selected" className="profile" to="/signup">
                    <i className="profile-icon"></i>
                    <h4>Me</h4>
                </NavLink>
            </div>
        </nav>

        return (
            this.props.currentUser ? signedIn : signedOut
        )
    }
};

export default Topbar;