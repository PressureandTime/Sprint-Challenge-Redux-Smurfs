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
} from '../actions/actionTypes';

const initialState = {
  deletingSmurfs: false,
  gettingSmurfs: false,
  addingSmurfs: false,
  smurfs: []
};

export function smurfsReducer(sliceOfState = initialState, action) {
  switch (action.type) {
    case GET_SMURFS_SUCCESS:
      return {
        ...sliceOfState,
        gettingSmurfs: false,
        smurfs: action.payload
      };
    case ADD_SMURFS_SUCCESS:
      return {
        ...sliceOfState,
        addingSmurfs: false,
        smurfs: action.payload
      };

    case DELETE_SMURFS_SUCCESS:
      return {
        ...sliceOfState,
        deletingSmurfs: false,
        smurfs: action.payload
      };

    default:
      return sliceOfState;
  }
}

export function errorSmurfReducer(sliceOfState = initialState, action) {
  switch (action.type) {
    case GET_SMURFS_FAILURE:
      return {
        ...sliceOfState,
        gettingSmurfs: false
      };

    case GET_SMURFS_SUCCESS:
      return {
        ...sliceOfState,
        gettingSmurfs: false
      };

    case ADD_SMURFS_FAILURE:
      return {
        ...sliceOfState,
        addingSmurfs: false
      };

    case ADD_SMURFS_SUCCESS:
      return {
        ...sliceOfState,
        addingSmurfs: true
      };

    case DELETE_SMURFS_SUCCESS:
      return {
        ...sliceOfState,
        deletingSmurfs: true
      };

    case DELETE_SMURFS_FAILURE:
      return {
        ...sliceOfState,
        deletingSmurfs: false
      };

    default:
      return sliceOfState;
  }
}

export function requestPendingReducer(sliceOfState = initialState, action) {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...sliceOfState,
        gettingSmurfs: true
      };

    case ADD_SMURFS:
      return {
        ...sliceOfState,
        gettingSmurfs: true
      };

    case DELETE_SMURFS:
      return {
        ...sliceOfState,
        deletingSmurfs: true
      };

    default:
      return sliceOfState;
  }
}
