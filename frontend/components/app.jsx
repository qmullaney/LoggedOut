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
import Profile from './users/profile';
import Modal from './modal/modal-container';
import ConnectionsPage from './connections/connections_container';
import SearchModal from './topbar/search_modal';
import BotBar from './topbar/botbar';

const App = () => {
    return <div className="app">
        <SearchModal />
        <Modal/>
        <BotBar/>
        <header>
            <Route exact path="/" component={topbarContainer}/>
            <Route exact path="/feed/" component={topbarContainer}/>
            <Route path="/user" component={topbarContainer}/>
            <Route path="/connections" component={topbarContainer}/>

        </header>
        <ProtectedRoute path="/user/:id" component={(props) =>
            <Profile {...props} key={window.document.URL} />}/>
        <ProtectedRoute exact path="/feed" component={feedContainer}/>
        <AuthRoute exact path="/signup" component={signupFormContainer}/>
        <AuthRoute exact path="/signin" component={signinAltContainer}/>
        <AuthRoute exact path="/" component={loginFormContainer}/>
        <ProtectedRoute exact path="/connections/:id"  component={(props) =>
            <ConnectionsPage {...props} key={window.location.pathname} />} />
    </div>
}

export default App;