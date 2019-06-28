import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

export class Smurfs extends Component {
  render() {
    return (
      <div>
        {this.props.smurfs.map(smurf => (
          <p key={uuid()}>
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

export default connect(mapStateToProps)(Smurfs);
