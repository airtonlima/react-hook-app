
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { Navbar } from './Navbar';

import { HomeScreen } from './HomeScreen';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                
                <Navbar />

                <div className="container">
                    <Switch>
                        <Route exact path='/'      component={ HomeScreen  } />
                        <Route exact path='/about' component={ AboutScreen } />
                        <Route exact path='/login' component={ LoginScreen } />

                        <Redirect to='/' /> {/* <Route component={ HomeScreen } /> */}

                    </Switch>
                </div>
            </div>
        </Router>
    );
}