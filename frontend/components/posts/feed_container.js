import { connect } from 'react-redux';
import Feed from './feed';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    
})

export default connect(mSTP, mDTP)(Feed)