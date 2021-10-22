import React from 'react';
import { closeSearch, openSearch } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SearchItem from './search_item';

class SearchModal extends React.Component{
    constructor(props){
        super(props);


    }



    render(){

        const { open, results } = this.props;

        let index = [];

        if (open){
            for(const id in results){
                index.push(
                    <SearchItem user={results[id]} key={id} closeSearch={this.props.closeSearch} />
                )
            }
        }


        if (open){//switch to open
            return(
                <div className="search-modal-background" onClick={this.props.closeSearch}>
                    <div className="search-modal" onClick={event => event.stopPropagation()}>
                        {index}
                    </div>
                </div>
            )
        }else{
            return null
        }
    }
}

const mSTP = state => ({
    open: state.searchModal.open,
    results: state.searchModal.results
})

const mDTP = dispatch => ({
    closeSearch: () => dispatch(closeSearch()),
    openSearch: () => dispatch(openSearch())
});

export default connect(mSTP, mDTP)(SearchModal);