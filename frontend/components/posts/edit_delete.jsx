import React from 'react';
import { BsThreeDots, BsTrashFill, BsPencil } from "react-icons/bs";
import { Link } from 'react-router-dom';


class EditDeleteDropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            show: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        let d = document.getElementById("root");
        d.addEventListener("click",this.handleClick);
    }


    handleClick(e){
        let opposite = !this.state.show;
        let path = e.path || e.composedPath();
        let classPath = path.map(el => ( el.className));

        if(classPath.includes(this.props.post.id.toString())){
            this.setState({
                show: opposite
                
            })
        }else{
            this.setState({
                show: false
            })
        }
    }

    componentWillUnmount(){
        let b = document.getElementById("root");
        b.removeEventListener('click', this.handleClick);
    }

    render(){

        
        if (this.props.post.author_id !== this.props.currentUser.id){
            return null;
        }

        return (
            <button className="ddd-button">
                <div className={`${this.props.post.id}`}>
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
                </div>
            </button>
        )
    }
}

export default EditDeleteDropdown;