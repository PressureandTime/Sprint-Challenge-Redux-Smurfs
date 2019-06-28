import React, { Component } from 'react';
import { connect } from 'react-redux';
import Smurfs from './Smurfs';
import { Route, NavLink } from 'react-router-dom';
import { getSmurfs, addSmurfs } from '../actions/actionCreators';

export class SmurfForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addSmurfs = event => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    this.props.addSmurfs(newSmurf);
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.getSmurfs}>Get smurfs</button>
        </div>
        <br />

        <div>
          <form onSubmit={this.addSmurfs}>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
            <button type="submit">Add</button>
          </form>
          {/* <Smurfs smurfs={this.props.smurfs} /> */}
        </div>

        <Route
          path="/"
          render={props => {
            return <Smurfs {...props} smurfs={this.props.smurfs} />;
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

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurfs }
)(SmurfForm);
