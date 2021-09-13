export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const FETCH_SOME_POSTS = 'FETCH_SOME_POSTS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';


import * as APIUtil from '../util/post_api_util';

const receive_errors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
})

const clear_errors = () => ({
    type: CLEAR_ERRORS
})

const receive_post = post => ({
    type: RECEIVE_POST,
    post
});

const receive_posts = posts =>({
    type: RECEIVE_POSTS,
    posts
})

export const createPost = postForm => dispatch => {
    return APIUtil.createPost(postForm).then(post => dispatch(receive_post(post)), error => dispatch(receive_errors(error.responseJSON)))
};

export const getAllPosts = () => dispatch => (
    APIUtil.fetchPosts().then(posts => dispatch(receive_posts(posts)))
)

export const clearErrors = () => dispatch => {
    return dispatch(clear_errors())
}