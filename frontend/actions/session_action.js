import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receive_current_user = user => ({
    type: RECEIVE_CURRENT_USER,
    user 
})

const logout_current_user = () => ({
    type: LOGOUT_CURRENT_USER
})

const receive_errors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

const clear_errors = () => ({
    type: CLEAR_ERRORS
})

export const login = user => dispatch => {
    return APIUtil.login(user).then(user => dispatch(receive_current_user(user)), 
                                    err => (dispatch(receive_errors(err.responseJSON))))
}

export const logout = () => dispatch => {
    return APIUtil.logout().then(() => dispatch(logout_current_user()))
}

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => dispatch(receive_current_user(user)), 
                              err => (dispatch(receive_errors(err.responseJSON))))
)

export const clearErrors = () => dispatch => {
    return dispatch(clear_errors())
}
