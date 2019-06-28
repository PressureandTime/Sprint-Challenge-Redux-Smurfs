import React, { Component } from 'react';
import { connect } from 'react-redux';
import Smurfs from './Smurfs';
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
          <h2>Get Smurfs</h2>
          <button onClick={this.props.getSmurfs}>Get smurfs</button>
        </div>

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
            <button type="submit">Add to the village</button>
          </form>
          <Smurfs smurfs={this.props.smurfs} />
        </div>
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
