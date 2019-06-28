import {
  GET_SMURFS,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  ADD_SMURFS,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAILURE,
} from '../actions/actionTypes';

const initialState = {
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

    default:
      return sliceOfState;
  }
}
