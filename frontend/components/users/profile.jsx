import { connect } from 'react-redux';
import React from 'react';
import { fetchUser } from '../../actions/user_actions';
import IdentitySection from './identity_section'

class Home extends React.Component {
    constructor(props){
        super(props);

        this.user;
    }

    componentDidMount(){
        this.props.fetchUser(userId);
        this.user = users[userId];
    }

    render (){

        return(

            <div className="home">
                <IdentitySection user={this.user} currentUser={this.props.currentUser} ownProfile={this.props.currentUser == this.props.userId} />
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