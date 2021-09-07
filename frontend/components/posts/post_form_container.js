import {connect } from 'react-redux';

import React from 'react';

import { closeModal } from '../../actions/modal_actions';
import { createPost } from '../../actions/post_action';

import PostForm from './post_form';


const mSTP = state => ({
   currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    submitFormPost: postForm => dispatch(createPost(postForm)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(PostForm);