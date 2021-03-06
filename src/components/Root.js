import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import AdminPage from './routes/AdminPage';
import AuthPage from './routes/AuthPage';
import ProtectedRoute from './common/ProtectedRoute';
import {moduleName, signOut} from '../ducks/auth';
import {connect} from 'react-redux';
import EventsPage from './routes/EventsPage'

class Root extends Component {
    render() {
        const {signOut, signedIn} = this.props;
        const btn = signedIn
            ? <button onClick = {signOut}>Sign out</button>
            : <Link to='/auth/signin'>sign in</Link>
        return (
            <div>
                {btn}
                <ProtectedRoute path='/admin' component={AdminPage} />
                <ProtectedRoute path='/events' component={EventsPage} />
                <Route path='/auth' component={AuthPage} />
            </div>
        );
    };
}

export default connect(state => ({
    signedIn: !!state[moduleName].user
}), {signOut})(Root);
