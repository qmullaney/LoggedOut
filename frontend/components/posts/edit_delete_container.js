import { connect } from 'react-redux';

import EditDeleteDropdown from './edit_delete'

const mSTP = state => ({

})

const mDTP = dispatch => ({
    openModal: (modal, toEdit) => dispatch(openModal(modal, toEdit))
})

export default connect(mSTP, mDTP)(EditDeleteDropdown);