import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Step1 from './Step1';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/step1" />} />
                <Route path="/step1" component={Step1} />
                {/* autres routes */}
            </Switch>
        </Router>
    );
}

export default App;
