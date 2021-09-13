export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';


export const openModal = (modal, toEdit)=> {
    console.log("in openModal action");
    return {
        type: OPEN_MODAL,
        modal,
        toEdit
    };
}

export const closeModal = () => ({
    type: CLOSE_MODAL
})