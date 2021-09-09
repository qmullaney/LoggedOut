import React from 'react';
import { 
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';

import { ProtectedRoute, AuthRoute } from '../util/route_util';

import signupFormContainer from './session_form/signup_form_container';
import loginFormContainer from './session_form/login_form_container';
import signinAltContainer from './session_form/signin_alt_container';
import topbarContainer from './topbar/topbar_container';
import feedContainer from './posts/feed_container';
import Modal from './modal/modal-container';


const App = () => (
    <div>
        <Modal/>
        <header>
            <Route exact path="/" component={topbarContainer}/>
            <Route exact path="/feed/" component={topbarContainer}/>
        </header>
        <ProtectedRoute exact path="/feed" component={feedContainer}/>
        <AuthRoute exact path="/signup" component={signupFormContainer}/>
        <AuthRoute exact path="/signin" component={signinAltContainer}/>
        <AuthRoute exact path="/" component={loginFormContainer}/>
    </div>
)

export default App;