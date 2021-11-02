import React from 'react';
import { Link } from 'react-router-dom';

class SigninAltForm extends React.Component {
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
        let currentErrors = [];
        for(let i = 0; i < this.props.errors.length; i++){
            <li id={`${i}`}>
                {currentErrors.push(this.props.errors[i])}
            </li>
        }
        
        let first = <div className="signin-alt-main">
                <Link className="image" to="/" onClick={this.props.clearErrors}>LoggedOut</Link>
                <form onSubmit={this.handleSubmit} className="signin-session">
                    <h1>Sign in</h1>
                    <h3>Make the most of your professional life</h3>
                    <ul className="signin-errors">
                        {currentErrors}
                    </ul>
                    <div className="input-container">
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                        <label className={this.state.email.length === 0 ? "" : "full"}>Email or phone number</label>
                    </div>
                    <div className="input-container">
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                        <label className={this.state.password.length === 0 ? "" : "full"}>Password </label>
                    </div>
                    <div className="submits">
                        <input type="submit" value="Sign in" />
                        <p>───────  or  ───────</p>
                        <input className="demo-user" type="button" value="Sign in with Demo User" onClick={this.props.loginDemoUser}/>
                    </div>
                </form>
                <p className="switch">New to LinkedIn? <Link className="sign-in" to="/signup" onClick={this.props.clearErrors}>Join now</Link></p>
            </div>

        return (
            first
        )
        
    }
}

export default SigninAltForm;