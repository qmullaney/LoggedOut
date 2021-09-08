import React from 'react';
import { Link } from 'react-router-dom';

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
        
            <Link className= "sign-in" onClick={this.props.clearErrors} to="/">Sign in</Link>
        
            </div>
            
        </nav>;

        const signedIn = <nav>
            <button className="logout" onClick={this.handleLogout}>Logout</button>
        </nav>

        return (
            this.props.currentUser ? signedIn : signedOut
        )
    }
};

export default Topbar;