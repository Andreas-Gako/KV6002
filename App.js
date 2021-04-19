import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Search from './Components/Search';
import Sensors from './Components/Sensors.js';
import Users from './Components/Users.js';
import NotFound404 from './Components/NotFound404.js';
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import FireDepartments from './Components/FireDepartments.js';


function App() {
    return (
        <Router basename="/kf6012/team2">
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/devices">Devices</Link>
                        </li>
                        <li>
                            <Link to="/fireDep">Fire Departments</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/devices">
                        <Sensors />
                    </Route>
                    <Route path="/fireDep">
                        <FireDepartments />
                    </Route>
                    <Route path="/login">
                        <Users />
                    </Route>
                    <Route path="*">
                        <NotFound404 />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
