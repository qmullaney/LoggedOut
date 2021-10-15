export const RECEIVE_CONNECTEES = 'RECEIVE_CONNECTEES';

import * as APIUtil from '../util/connection_api_util';

const receive_connectees = connectees => ({
    type: RECEIVE_CONNECTEES,
    connectees
});

export const fetchConnectees = id = dispatch => (
    APIUtil.getNoConnections(id).then(peeps => dispatch(receive_connectees(peeps)))
);