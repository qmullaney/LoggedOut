import React from 'react';
import { connect } from 'react-redux';

class Comment extends React.Component{
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return (
            <div className="comment">
                <h1>hello hello</h1>
            </div>
        )
    }
}

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(Comment)