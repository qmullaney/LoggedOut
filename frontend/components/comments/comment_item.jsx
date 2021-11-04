import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from'react-router-dom';
import { BsThreeDots, BsTrashFill, BsPencil } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import $ from 'jquery';


class Comment extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            edit: false,
            dd: false,
            text: this.props.comment.body,
            show: true
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount(){
        let d = document.getElementById("root");
        d.addEventListener("click",this.handleClick);

    }

    componentWillUnmount(){
        let b = document.getElementById("root");
        b.removeEventListener('click', this.handleClick);
    }


    handleClick(e){
        let opposite = !this.state.dd;
        let path = e.path || e.composedPath();
        let classPath = path.map(el => ( el.className));

        if(classPath.includes(this.props.comment.id.toString())){
            this.setState({
                dd: opposite
            })
        }else{
            this.setState({
                dd: false
            })
        }
    }

    handleEdit(e){
        e.preventDefault();

        $.ajax({
            method: 'PATCH',
            url: `api/comments/${this.props.comment.id}`,
            data: { text: this.state.text }
        })

        this.setState({
            edit: false
        })
    }

    handleCancel(e){
        e.preventDefault();

        this.setState({
            text: this.props.comment.body,
            edit: false
        })
    }

    handleDelete(e){
        e.preventDefault();

        $.ajax({
            method: 'DELETE',
            url: `api/comments/${this.props.comment.id}`
        }).then( () => {
            this.setState({
                show: false
            })
        })
    }

    update(e){
        this.setState({
            text: e.target.value
        })
        e.target.style.height = "5px";
        e.target.style.height = (e.target.scrollHeight)+"px";
    }

    render(){
        if (!this.state.show){
            return null;
        }
        const { comment, currentUser } = this.props;

        //DROP DOWN CODE
        let menu;
        if (comment.commenter_id !== currentUser.id){
            menu = "";
        }else{
            menu = <button className="comment-dd-button">
                <div className={`${this.props.comment.id}`}>
                    <BsThreeDots className="dots-icon"/>

                    <ul onClick={e => e.stopPropagation()} className={this.state.dd ? "show-dots" : "clear"}>

                        <div onClick={() => this.setState({ edit: true }) }>
                            <BsPencil className="pencil"/>
                            <h3>Edit Comment</h3>
                        </div>
                        
                        <div onClick={this.handleDelete}>
                            <BsTrashFill className="pencil"/>
                            <h3>Delete Comment</h3>
                        </div>

                    </ul>    
                </div>
            </button>
        }


        let profileImg;
        if (comment.commenter_pic){
            profileImg = <NavLink to={`/user/${comment.commenter_id}`} className="pfp" > <img  src={comment.commenter_pic} alt="profile image" /></NavLink>
        }else{
            profileImg = <NavLink to={`/user/${comment.commenter_id}`} className="pfp" > <IoPersonCircleOutline className="empty-profile"/>  </NavLink>
        }
        return (
            <div className="comment">
                {profileImg}
                <div>

                    {menu}
                    <h1>{comment.commenter_name}</h1>
                    <h2>{comment.commenter_pronouns}</h2>
                    <textarea onChange={this.update} rows={`${this.state.text.length/20}`}
                        value={this.state.text} 
                        readOnly={this.state.edit ? false : true}  
                        >
                    </textarea>
                    <div className="save-cancel">
                        {this.state.edit ? <input type="button" className="post-comment" value="Save" onClick={this.handleEdit}/> : "" }
                        {this.state.edit ? <input type="button" className="post-comment cancel" value="Cancel" onClick={this.handleCancel}/> : "" }

                    </div>
                </div>
            </div>
        )
    }
}

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(Comment)