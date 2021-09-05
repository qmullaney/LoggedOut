import React from 'react';
import { 
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';
import loginFormContainer from './session_form/login_form_container';
import signupFormContainer from './session_form/signup_form_container';
import feedContainer from './posts/feed_container'

const App = () => (
    <div>
        <header>
            Header 
        </header>
        <Route exact path="/feed" component={feedContainer}/>
        <Route exact path="/signup" component={signupFormContainer}/>
        <Route exact path="/" component={loginFormContainer}/>
    </div>
)

export default App;