import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";
import {  IoMdArrowDropdown } from "react-icons/io";
import { withRouter } from 'react-router-dom';

class ProfileDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            show: false
        }
        // this.profileClick = this.profileClick.bind(this);
        this.whenFocusOrBlur = this.whenFocusOrBlur.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

        
    }

    // profileClick(e){
    //     let opposite = !this.state.show
    //     this.setState({
    //         show: opposite
    //     })
    // }
   

    whenFocusOrBlur(e){
        let opposite = !this.state.show

        
        if (e.relatedTarget){
            
            console.log("in profile")

            if (e.relatedTarget.className == 'profile-navlink'){
                
            }else{
                
                this.setState({
                    show: opposite
                })
            }
        }else{
            console.log('it flips');
            this.setState({
                show: opposite
            })
        }
        
        
    }

    handleLogout(e){
        this.props.logout().then(this.props.history.push('/'));
    }

    render(){
        
        
        const profImg = <IoPersonCircleOutline className="prof-img"/>

        
        return (
        
            <button  onBlur={this.whenFocusOrBlur} onFocus={this.whenFocusOrBlur} className="dd-button"   >
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
                    
                        <NavLink to={`/user/${this.props.currentUser.id}`} className="profile-navlink">View Profile</NavLink>
                        <hr />
                    <li className="logout" onClick={this.handleLogout}> 
                        Sign Out
                    </li>
                    
                </ul>
            </button>
        
        )
    }
}

export default withRouter(ProfileDropdown);