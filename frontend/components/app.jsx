import React from 'react';
import { 
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';

const App = () => (
    <div>
        <Route exact path="/" component={logInFormContainer}/>
    </div>
)

export default App;