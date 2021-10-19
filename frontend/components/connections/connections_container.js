import { connect } from 'react-redux';
import ConnectionsPage from './connections';
import { fetchConnectees } from '../../actions/connection_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    fetchConnectees: id => dispatch(fetchConnectees(id))
});

export default connect(mSTP, mDTP)(ConnectionsPage);