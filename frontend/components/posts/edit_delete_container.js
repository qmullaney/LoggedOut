import { connect } from 'react-redux';

import EditDeleteDropdown from './edit_delete'
import { openModal } from '../../actions/modal_actions'
import { deletePost } from '../../actions/post_action'

const mSTP = state => ({

})

const mDTP = dispatch => ({
    openModal: (modal, toEdit) => dispatch(openModal(modal, toEdit)),
    deletePost: postId => dispatch(deletePost(postId))
})

export default connect(mSTP, mDTP)(EditDeleteDropdown);