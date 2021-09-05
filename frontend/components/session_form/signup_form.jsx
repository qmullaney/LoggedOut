import React from 'react';

class SigninForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            name: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(input){
        return e => this.setState({
            [input]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Make the most of your professional life</h1>
                    <label>Email
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <label>Name
                        <input type="text" value={this.state.name} onChange={this.update('name')}/>
                    </label>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <input type="submit" value="Agree & Join" />
                </form>
            </div>
        )
    }
}

export default SigninForm;