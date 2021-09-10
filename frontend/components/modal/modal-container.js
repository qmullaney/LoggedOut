import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

import { createPost } from '../../actions/post_action';
import Modal from './modal';

const mSTP = state => ({
    modal: state.ui.modal 
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    postPost: postForm => dispatch(createPost(postForm))
})

export default connect(mSTP, mDTP)(Modal);