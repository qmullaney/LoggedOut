import { connect } from 'react-redux';
import React from 'react';
import { fetchUser } from '../../actions/user_actions';
import IdentitySection from './identity_section';
import AboutSection from './about_section';
import WorkSection from './work_section';

class Home extends React.Component {
    constructor(props){
        super(props);

        
    }

    componentDidMount(){
        
        this.props.fetchUser(this.props.userId);

        
    }
    
    render (){
        

        let idSection;
        let aboutSection;
        let workSection;
        if (this.props.users[this.props.userId]){
            
            idSection = <IdentitySection user={this.props.users[this.props.userId]} 
                                  currentUser={this.props.currentUser} 
                                  ownProfile={this.props.currentUser.id == this.props.userId} /> 

            aboutSection = <AboutSection user={this.props.users[this.props.userId]}
                                    currentUser={this.props.currentUser} 
                                    ownProfile={this.props.currentUser.id == this.props.userId} /> 
            workSection = <WorkSection user={this.props.users[this.props.userId]}
                                    currentUser={this.props.currentUser} 
                                    ownProfile={this.props.currentUser.id == this.props.userId} /> 
        }else{
            idSection = null;
            aboutSection = null;
            workSection = null;
        }
        
        return(
            


            <div className="profile-base">
                {idSection}
                {aboutSection}
                {workSection}
            </div>
        )

    }
}

const mSTP = (state, ownProps) => {
    return  {
    currentUser: state.entities.users[state.session.id],
    userId: ownProps.match.params.id,
    users: state.entities.users
}}

const mDTP = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
})

export default connect(mSTP, mDTP)(Home);