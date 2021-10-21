export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const OPEN_SEARCH = 'OPEN_SEARCH';
export const CLOSE_SEARCH = 'CLOSE_SEARCH';


export const openModal = (modal, toEdit)=> {
  
    return {
        type: OPEN_MODAL,
        modal,
        toEdit
    };
}

export const closeModal = () => ({
    type: CLOSE_MODAL
})

export const openSearch = ()=> {
  
    return {
        type: OPEN_SEARCH
    };
}

export const closeSearch = () => ({
    type: CLOSE_SEARCH
})