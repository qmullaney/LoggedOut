import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

const receive_current_user = user => ({
    type: RECEIVE_CURRENT_USER,
    user 
})

const logout_current_user = () => ({
    type: LOGOUT_CURRENT_USER
})

export const login = user => dispatch => (
    APIUtil.login(user).then(user => dispatch(receive_current_user(user)))
)

export const logout = () => dispatch => (
    APIUtil.logout().then(() => dispatch(logout_current_user()))
)

