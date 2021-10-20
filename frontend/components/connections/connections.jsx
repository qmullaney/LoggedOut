import React from 'react';
import ConnectionsItem from './connections_item';

class ConnectionsPage extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            connections: ""
        }
        
        //or try this.connections in a state
    }

    componentDidMount(){
        $.ajax({
            method: 'GET',
            url: `api/connections/${this.props.match.params.id}`,
            data: {toDo: "connections"}
        }).then((conns) => {this.setState({
            connections: conns
        })})

        this.props.fetchConnectees(this.props.currentUser.id);
        this.props.fetchUsrConnections(this.props.currentUser.id);
    }

    render(){
        let people = "";
        if (this.state.connections){
            people = Object.keys(this.state.connections).map(id => {
                return(
                    <li key={id} >
                        <ConnectionsItem usr_connections={this.props.usr_connections} currentUser={this.props.currentUser} connections={this.state.connections} user={this.state.connections[id]} no_returned_follows={this.props.no_returned_follows} />
                    </li>
                )
            })
        }
        //this  works so do not remove
        if (!this.props.usr_connections || !this.props.no_returned_follows){
            return null;
        }
        return (
            <div className="connections-container">
                <div className='space'> </div>
                <div className="conns">
                    <h3>{people.length == 1 ? `${people.length} result` : `${people.length} results` }</h3>
                    <ul className="connections">
                        {people.length !== 0 ? people : <h1>No connections yet.</h1> }
                    </ul>
                </div>
                <div className='space'></div>
            </div>
        )
    }
}

export default ConnectionsPage;