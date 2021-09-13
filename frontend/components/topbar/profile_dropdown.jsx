import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";
import {  IoMdArrowDropdown } from "react-icons/io";

class ProfileDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            show: false
        }
        this.profileClick = this.profileClick.bind(this);
    }

    profileClick(e){
        let opposite = !this.state.show
        this.setState({
            show: opposite
        })
    }

    render(){
        
        
        const profImg = <IoPersonCircleOutline className="prof-img"/>
        
        return (
        <div>
            <button onClick={this.profileClick} className="dd-button">
                <div  className="profile" >
                    <i className="profile-icon"></i>
                    <div>
                        <h4>Me  </h4>
                        <IoMdArrowDropdown className="downarrow"/>

                    </div>
                </div>

                <ul onClick={e => e.stopPropagation()} 
                    className={this.state.show ? "show-dropdown" : "clear" }>
                        
                    <li className="profile-bit">
                        {profImg}
                        <div className="name-role">
                          
                            <h2>{this.props.currentUser.name}</h2>
                            <h3>Certified Dingus</h3>
                        </div>
                    </li>
                    
                        <NavLink to="/profile" className="profile-navlink">View Profile</NavLink>
                        <hr />
                    <li className="logout" onClick={this.props.logout}> 
                        Sign Out
                    </li>
                    
                </ul>
            </button>
        </div>
        )
    }
}

export default ProfileDropdown;