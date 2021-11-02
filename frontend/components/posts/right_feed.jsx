import React from 'react';
import RightFeedItem from './right_feed_item';

class ConnectionsPage extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            connectors: ""
        }
        
    }

    componentDidMount(){
        $.ajax({
            method: 'GET',
            url: `api/connections/${this.props.currentUser.id}`,
            data: {toDo: "connectors"}
        }).then((conns) => {this.setState({
            connectors: conns
        })})

        
    }

    render(){
        let people = "";
        if (this.state.connectors){
            people = Object.keys(this.state.connectors).map(id => {
                return(
                    <li key={id} >
                        <RightFeedItem  currentUser={this.props.currentUser} user={this.state.connectors[id]} />
                    </li>
                )
            })
        }
       console.log(this.state.connectors);
        return (
            <div className="connections-container">
                
                <div className="conns xtra-space">
                    <ul className="connections">
                    <h1>{people.length > 0 ? `Pending Invites` : `No Pending Invites` }</h1>
                        {people}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ConnectionsPage;