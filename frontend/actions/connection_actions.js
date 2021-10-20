export const RECEIVE_CONNECTEES = 'RECEIVE_CONNECTEES';
export const RECEIVE_USR_CONNECTIONS = 'RECEIVE_USR_CONNECTIONS';

import * as APIUtil from '../util/connection_api_util';

const receive_connectees = connectees => ({
    type: RECEIVE_CONNECTEES,
    connectees
});

const receive_usr_connections = connections => ({
    type: RECEIVE_USR_CONNECTIONS,
    connections
});

export const fetchConnectees = id => dispatch => (
    APIUtil.getNoConnections(id).then(peeps => dispatch(receive_connectees(peeps)))
);

export const fetchUsrConnections = id => dispatch => (
    APIUtil.currentUsrConnections(id).then(peeps => dispatch(receive_usr_connections(peeps)))
);