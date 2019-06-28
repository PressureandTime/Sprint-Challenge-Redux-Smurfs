import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SmurfForm from './components/SmurfForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-links">
            <NavLink exact to="/smurf-form">
              <h3>Form for getting and adding smurfs</h3>
            </NavLink>
            <NavLink exact to="/">
              <h3>Home</h3>
            </NavLink>
          </div>
        </nav>

        <Route
          exact
          path="/smurf-form"
          render={props => {
            return <SmurfForm {...props} />;
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(reducers) {
  return {
    requestPending: reducers.requestPending,
    smurfs: reducers.smurfs
  };
}

export default connect(mapStateToProps)(App);
