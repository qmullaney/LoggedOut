import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillHome, AiFillLinkedin } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

import ProfileDropdown from './profile_dropdown_container'

class Topbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search_input: ""
        }

        this.handleLogout = this.handleLogout.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prevProps){
        if (prevProps.location.pathname !== this.props.location.pathname){
            this.setState({
                search_input: ""
            })
        }
    }

    handleLogout(){
        this.props.logout();
    }

    handleChange(){
        return e => {
            this.setState({
                search_input: e.target.value
            });
            this.props.fetchFillSearch(e.target.value);

        }
    }
    handleClick(e){
        e.preventDefault();

        this.props.openSearch();
        this.props.fetchFillSearch(this.state.search_input);
        
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
            <NavLink to="/feed" className="ln"> <AiFillLinkedin className="ln"/></NavLink>

            <div className="search-container" onClick={this.handleClick} > 
                <FaSearch className="FaSearch" />
                <input type="text" value={this.state.search_input} onChange={this.handleChange()} />
                <label className={this.state.search_input ? "hide" : "" } >Search</label>
            </div>
            
            <div className="nav-buttons" >
                <NavLink activeClassName="selected" className="home" to="/feed">
                    <AiFillHome className="home-icon" />
                    <h4>Home</h4>
                </NavLink>


                <ProfileDropdown/>
                
            </div>
        </nav>

        return (
            this.props.currentUser ? signedIn : signedOut
        )
    }
};

export default Topbar;