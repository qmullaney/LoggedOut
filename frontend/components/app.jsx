import React from 'react';
import { 
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';
import loginFormContainer from './session_form/login_form_container';
import signupFormContainer from './session_form/signup_form_container';

const App = () => (
    <div>
        <Route exact path="/signup" component={signupFormContainer}/>
        <Route exact path="/" component={loginFormContainer}/>
    </div>
)

export default App;