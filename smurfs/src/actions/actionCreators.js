import axios from 'axios';

import {
  GET_SMURFS,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  ADD_SMURFS,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAILURE,
  DELETE_SMURFS,
  DELETE_SMURFS_SUCCESS,
  DELETE_SMURFS_FAILURE
} from './actionTypes';

export function getSmurfs() {
  return dispatch => {
    dispatch({ type: GET_SMURFS });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res);
        dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_SMURFS_FAILURE, payload: err });
        console.error(err);
      });
  };
}

export function addSmurfs(newSmurf) {
  return dispatch => {
    dispatch({ type: ADD_SMURFS });

    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: ADD_SMURFS_FAILURE, payload: error });
        console.error(error);
      });
  };
}

export function deleteSmurfs(id) {
  return dispatch => {
    dispatch({ type: DELETE_SMURFS });

    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        dispatch({ type: DELETE_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: DELETE_SMURFS_FAILURE, payload: error });
        console.error(error);
      });
  };
}
