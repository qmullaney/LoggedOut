import React from 'react';
import { Link } from 'react-router-dom';

class SigninForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            name: '',
            password: '',
            emailPage: true,
            firstName: '',
            lastName: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMoveOn = this.handleMoveOn.bind(this);
    }

    update(input){
        return e => this.setState({
            [input]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        let newName = this.state.firstName + " " + this.state.lastName;
        this.props.signup({name: newName, email: this.state.email, password: this.state.password});
    }

    handleMoveOn(e){
        e.preventDefault();
        this.setState({
            emailPage: false
        })
    }

    render() {
        let currentErrors = [];
        for(let i = 0; i < this.props.errors.length; i++){
            <li>
                {currentErrors.push(this.props.errors[i])}
            </li>
        }
        
        let first = <div className="signup-main">
                <i className="image"/>
                <h1>Make the most of your professional life</h1>
                <form onSubmit={this.handleMoveOn} className="signup-session">
                    <ul className="signup-errors">
                        {currentErrors}
                    </ul>
                    <label>Email</label>
                    <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    
                    <label>Password (6 or more characters) </label>
                    <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    <p>By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, Cookie Policy and Soul Selling Policy.</p>
                    <div className="submits">
                        <input type="submit" value="Agree & Join" />
                        <p>───────────   or   ───────────</p>
                        <input className="demo-user" type="button" value="Sign in with Demo User"/>
                    </div>
                    <p className="switch">Already on LinkedIn? <Link className="sign-in" to="/">Sign in</Link></p>
                </form>
            </div>

        let second = 
            <div className="signup-main">
                <i className="image"/>
                <h1>Make the most of your professional life</h1>
                <form onSubmit={this.handleSubmit} className="signup-session">
                    <ul className="signup-errors">
                        {currentErrors}
                    </ul>
                    <label>First name</label>
                    <input type="text" value={this.state.firstName} onChange={this.update('firstName')}/>
                    
                    <label>Last name</label>
                    <input type="text" value={this.state.lastName} onChange={this.update('lastName')}/>
                    

                    <div className="submits">
                        <input type="submit" value="Continue" />
                    </div>
                    
            </form>
        </div>

        return (
            this.state.emailPage ? first : second
        )
        
    }
}

export default SigninForm;