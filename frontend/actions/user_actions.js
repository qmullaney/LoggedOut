import * as APIUtil from '../util/user_api_util'


export const RECEIVE_USER = 'RECEIVE_USER'


const receive_user = user => ({
    type: RECEIVE_USER,
    user 
})


export const fetchUser = userId => dispatch => (
    APIUtil.fetchUser(userId).then(user => dispatch(receive_user(user)))
)

export const editUser = userForm => dispatch => (
    APIUtil.editUser(userForm).then(user => dispatch(receive_user(user)))
)