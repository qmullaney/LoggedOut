import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Protected = ({ component: Component, path, logged_in, exact }) => {
    
    return <Route  
        path={path}
        exact={exact}
        render={props => (
            logged_in ? 
            <Component {...props} />
            :
            <Redirect to="/" />
        )}    
    />
}

const Auth = ({ component: Component, path, logged_in, exact }) => {
    return <Route  
        path={path}
        exact={exact}
        render={props => (
            logged_in ? 
            <Redirect to="/feed" />
            :
            <Component {...props} />
        )}    
    />
}

const mSTP = state => ({
    logged_in: Boolean(state.session.id)
});

export const ProtectedRoute = withRouter(connect(mSTP)(Protected))

export const AuthRoute = withRouter(connect(mSTP)(Auth))