import React from 'react';
import { BsThreeDots, BsTrashFill, BsPencil } from "react-icons/bs";
import { Link } from 'react-router-dom';


class EditDeleteDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            show: false
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

        
        if (this.props.post.author_id !== this.props.currentUser.id){
            return null;
        }

        return (
            <button onClick={this.dotClick} className="ddd-button">
                <BsThreeDots className="dots-icon"/>

                <ul onClick={e => e.stopPropagation()} className={this.state.show ? "show-dots" : "clear"}>
                    <div onClick={() => {this.props.openModal("editPost", this.props.post); this.dotClick();} }>
                        <BsPencil className="pencil"/>
                        <h3>Edit Post</h3>
                    </div>
                    {console.log(this.props.post.id)}
                    <div onClick={() => this.props.deletePost(this.props.post.id)}>
                        <BsTrashFill className="pencil"/>
                        <h3>Delete Post</h3>
                    </div>
                </ul>    
            </button>
        )
    }
}

export default EditDeleteDropdown;