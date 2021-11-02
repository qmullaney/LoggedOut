import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            name: '',
            password: '',
            emailPage: true,
            firstName: '',
            lastName: '',
            passwordError: '',
            emailError: '',
            nameError: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMoveOn = this.handleMoveOn.bind(this);
        this.updateErrors = this.updateErrors.bind(this);
    }

    update(input){
        // this.updateErrors();
        return e => this.setState({
            [input]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        let newName = this.state.firstName + " " + this.state.lastName;
        this.props.signup({user:{name: newName, email: this.state.email, password: this.state.password}}).then(this.setState({emailPage: true}));
    }

    handleMoveOn(e){
        e.preventDefault();
        if (!this.updateErrors()){
            this.setState({
                emailPage: false
            })
        }
    }

    updateErrors(){
        let errorsStatus = false;
        if (this.state.password.length < 6){
            this.setState({passwordError: 'Password must be 6 characters or more.'})
            errorsStatus = true;
        }else{
            this.setState({passwordError: ''})
        }
        if (!this.state.email.includes('@') || !this.state.email.includes('.')){
            this.setState({emailError: 'Please enter a valid email address.'})
            errorsStatus = true;
        }else{
            this.setState({emailError: ''})
        }
        return errorsStatus;
    }

    render() {
        let currentErrors = [];
        for(let i = 0; i < this.props.errors.length; i++){
            <li key={`${i}`}>
                {currentErrors.push(this.props.errors[i])}
            </li>
        }
        currentErrors.push(<li key="200">{this.state.passwordError}</li> );
        currentErrors.push(<li key='2001'>{this.state.emailError}</li> );

        
        let first = <div className="signup-main">
                <Link className="image" to="/" onClick={this.props.clearErrors}>LoggedOut</Link>
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
                        <input className="demo-user" type="button" value="Sign in with Demo User" onClick={this.props.loginDemoUser}/>
                    </div>
                    <p className="switch">Already on LinkedIn? <Link className="sign-in" to="/" onClick={this.props.clearErrors} >Sign in</Link></p>
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

export default SignupForm;