import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import Modal from './modal';

const mSTP = state => ({
    modal: state.ui.modal 
});

const mDTP = dispatch => ({
    closeModel: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Modal);