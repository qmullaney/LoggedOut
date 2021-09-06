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
        const signedOut = <nav>
            <Link onClick={this.props.clearErrors} to="/">Linkedin</Link>
            <Link onClick={this.props.clearErrors} to="/signup">Join now</Link>
            <Link to="/">Sign in</Link>
        </nav>;

        const signedIn = <nav>
            <button onClick={this.handleLogout}>Log out</button>
        </nav>

        return (
            this.props.currentUser ? signedIn : signedOut
        )
    }
};

export default Topbar;