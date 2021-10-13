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
        // this.whenFocusOrBlur = this.whenFocusOrBlur.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleClick =  this.handleClick.bind(this);
        
    }

    componentDidMount(){
        let b = document.getElementById("root");
        b.addEventListener('click', this.handleClick);
    }

    handleClick(e){
        let opposite = !this.state.show;
        let path = e.path || e.composedPath();
        let classPath = path.map(el => ( el.className));


        if(classPath.includes('dd-button')){
            this.setState({
                show: opposite
            })
        }else{
            this.setState({
                show: false
            })
        }
    }

    componentWillUnmount(){
        let b = document.getElementById("root");
        b.removeEventListener('click', this.handleClick);
    }

    // profileClick(e){
    //     this.whenFocusOrBlur(e);
    // }
   

    // whenFocusOrBlur(e){
    //     let opposite = !this.state.show
        
    //     if (e.relatedTarget){

    //         if (e.relatedTarget.className == 'profile-navlink'){
                
    //         }else{
                
    //             this.setState({
    //                 show: opposite
    //             })
    //         }
    //     }else{
           
    //         this.setState({
    //             show: opposite
    //         })
    //     }
        
    // }

    handleLogout(e){
        this.props.logout().then(this.props.history.push('/'));
    }

    render(){
        
        let profileImg;

        if (this.props.currentUser.profile_url){
            profileImg = <i className="pfp" > <img  src={this.props.currentUser.profile_url} alt="profile image" /></i>
        }else{
            profileImg = <i className="pfp" > <IoPersonCircleOutline className="empty-profile"/>  </i>
        }
        // onBlur={this.whenFocusOrBlur} onFocus={this.whenFocusOrBlur}
        
        return (
        
            <div  onClick={this.profileClick} className="dd-button"   >
                <div  className="profile"  >
                    {profileImg}
                    <div>
                        <h4>Me  </h4>
                        <IoMdArrowDropdown className="downarrow"/>

                    </div>
                </div>

                <ul onClick={e => e.stopPropagation()} 
                    className={this.state.show ? "show-dropdown" : "clear" }>
                        
                    <li className="profile-bit">
                        {profileImg}
                        <div className="name-role">
                          
                            <h2>{this.props.currentUser.name}</h2>
                            <h3>{this.props.currentUser.headline}</h3>
                        </div>
                    </li>
                    
                        <NavLink to={`/user/${this.props.currentUser.id}`} className="profile-navlink">View Profile</NavLink>
                        <hr />
                    <li className="logout" onClick={this.handleLogout}> 
                        Sign Out
                    </li>
                    
                </ul>
            </div>
        
        )
    }
}

export default withRouter(ProfileDropdown);