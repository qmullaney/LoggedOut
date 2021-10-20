import { connect } from 'react-redux';
import ConnectionsPage from './connections';
import { fetchConnectees, fetchUsrConnections } from '../../actions/connection_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    usr_connections: state.session.CUConnections,
    no_returned_follows: state.session.connectees
})

const mDTP = dispatch => ({
    fetchConnectees: id => dispatch(fetchConnectees(id)),
    fetchUsrConnections: id => dispatch(fetchUsrConnections(id))
});

export default connect(mSTP, mDTP)(ConnectionsPage);