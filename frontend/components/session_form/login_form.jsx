import React from 'react';

class LoginForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
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
        this.props.login(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Welcome to your professional community</h1>
                    <label>Email
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <input type="submit" value="Sign In" />
                </form>
            </div>
        )
    }
}

export default LoginForm;