import React from 'react';

class ConnectionsPage extends React.Component{
    constructor(props){
        super(props);

        this.connections;
        //or try this.connections in a state
    }

    componentDidMount(){
        $.ajax({
            method: 'GET',
            url: `api/connections/${this.props.match.params.id}`,
            data: "connections"
        }).then((conns) => {this.connections = conns})
    }

    render(){
        let people;
        if (this.connections){
            people
        }
        return (
            <div className="connections">

            </div>
        )
    }
}

export default ConnectionsPage;