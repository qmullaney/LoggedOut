import React from 'react';
import { BsThreeDots, BsTrashFill, BsPencil } from "react-icons/bs";
import { Link } from 'react-router-dom';


class EditDeleteDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            show: false
        }

        this.blurOrNah = this.blurOrNah.bind(this);
    }

    blurOrNah(e){
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
            <button onBlur={this.blurOrNah} onFocus={this.blurOrNah} className="ddd-button">
                <BsThreeDots className="dots-icon"/>

                <ul onClick={e => e.stopPropagation()} className={this.state.show ? "show-dots" : "clear"}>
                    <div onClick={() => this.props.openModal("editPost", this.props.post) }>
                        <BsPencil className="pencil"/>
                        <h3>Edit Post</h3>
                    </div>
                    
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