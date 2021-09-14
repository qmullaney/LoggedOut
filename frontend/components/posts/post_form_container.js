import {connect } from 'react-redux';

import React from 'react';

import { closeModal } from '../../actions/modal_actions';
import { createPost, clearErrors, editPost } from '../../actions/post_action';
import { openModal } from '../../actions/modal_actions';

import PostForm from './post_form';


const mSTP = state => ({
   currentUser: state.entities.users[state.session.id],
   error: state.errors.postCreationError,
   modal: state.ui.modal,
   toEdit: state.ui.toEdit
});

const mDTP = dispatch => ({
    submitFormPost: postForm => dispatch(createPost(postForm)),
    editFormPost: postForm => dispatch(editPost(postForm)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
    openModal: (modal, toEdit) => dispatch(openModal(modal, toEdit))
});

export default connect(mSTP, mDTP)(PostForm);