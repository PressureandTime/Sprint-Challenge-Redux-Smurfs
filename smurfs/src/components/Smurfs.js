import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { deleteSmurfs } from '../actions/actionCreators';

export class Smurfs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.smurfs.map(smurf => (
          <p onClick={() => this.props.deleteSmurfs(smurf.id)} key={uuid()}>
            Name: {smurf.name} <br />
            Height: {smurf.height} <br />
            Age: {smurf.age}
          </p>
        ))}
      </div>
    );
  }
}

function mapStateToProps(reducers) {
  return {
    requestPending: reducers.requestPending,
    smurfs: reducers.smurfs.smurfs
  };
}

export default connect(
  mapStateToProps,
  { deleteSmurfs }
)(Smurfs);
