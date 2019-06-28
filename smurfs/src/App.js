import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import SmurfForm from './components/SmurfForm';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <SmurfForm />
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
