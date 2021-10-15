import { connect } from 'react-redux';
import ConnectionsPage from './connections'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(ConnectionsPage);