import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { Link } from 'react-router-dom';


class EditDeleteDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            show: true
        }

        this.dotClick = this.dotClick.bind(this);
    }

    dotClick(e){
        let opposite = !this.state.show;
        this.setState({
            show: opposite
        })
    };

    render(){

        
        if (post.author_id !== currentUser.id){
            return null;
        }

        return (
            <button onClick={this.dotClick} className="ddd-button">
                <BsThreeDots className="dots-icon"/>

                <ul onClick={e => e.stopPropagation()} className={this.state.show ? "show-dots" : ""}>
                    {/* <div onClick={}>

                    </div>
                    <div onClick={}>

                    </div> */}
                </ul>    
            </button>
        )
    }
}

export default EditDeleteDropdown;