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
        this.props.signup();
    }


    render() {
        let currentErrors = [];
        for(let i = 0; i < this.props.errors.length; i++){
            <li>
                {currentErrors.push(this.props.errors[i])}
            </li>
        }
        
        let first = <div className="signin-alt-main">
                <i className="image"/>
                <form onSubmit={this.handleSubmit} className="signin-session">
                    <h1>Sign in</h1>
                    <h3>Make the most of your professional life</h3>
                    <ul className="signup-errors">
                        {currentErrors}
                    </ul>
                    <label>Email</label>
                    <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    
                    <label>Password </label>
                    <input type="password" value={this.state.password} onChange={this.update('password')}/>
                
                    <div className="submits">
                        <input type="submit" value="Sign in" />
                        <p>───────  or  ───────</p>
                        <input className="demo-user" type="button" value="Sign in with Demo User" onClick={this.props.loginDemoUser}/>
                    </div>
                </form>
                <p className="switch">New to LinkedIn? <Link className="sign-in" to="/signup">Join now</Link></p>
            </div>

        return (
            first
        )
        
    }
}

export default SigninAltForm;