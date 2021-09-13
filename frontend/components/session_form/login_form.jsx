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

        this.props.login(Object.assign({},this.state));
    }

    render() {
        let currentErrors = [];
        for(let i = 0; i < this.props.errors.length; i++){
            <li>
                {currentErrors.push(this.props.errors[i])}
            </li>
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="session-log-in">
                    <h1>Welcome to your professional community</h1>

                    <ul className="signin-errors">
                            {currentErrors}
                    </ul>
                    
                    <i className="image"/>

                    <div className="signin-inputs">
                        <div className="input-container">
                            <input type="text" value={this.state.email} onChange={this.update('email')}/>
                            <label className={this.state.email.length === 0 ? "" : "full"}>Email or phone number</label>
                        </div>
                        <div className="input-container">
                            <input type="password" value={this.state.password} onChange={this.update('password')}/>
                            <label className={this.state.password.length === 0 ? "" : "full"}>Password </label>
                        </div>
                    </div>
                    <div className="submits">
                        <input type="submit" value="Sign In" />
                        <div className="lines">
                            <hr />
                            <h3>or</h3>
                            <hr />

                        </div>

                        <input className="demo-user" type="button" value="Sign in with Demo User" onClick={this.props.loginDemoUser}/>

                    </div>
                </form>

            </div>
        )
    }
}

export default LoginForm;