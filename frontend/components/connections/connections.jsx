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
            data: "connections"
        }).then((conns) => {this.setState({
            connections: conns
        })})
    }

    render(){
        let people;
        if (this.state.connections){
            people = Object.keys(this.state.connections).map(id => {
                return(
                    <li key={id} >
                        <ConnectionsItem user={this.state.connections[id]} />
                    </li>
                )
            })
        }
        return (
            <div className="connections">
                {people}
            </div>
        )
    }
}

export default ConnectionsPage;