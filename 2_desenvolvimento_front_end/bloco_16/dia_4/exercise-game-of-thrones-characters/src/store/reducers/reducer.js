import {GET_PERSONA, REQUEST_PERSONA, FAILED_REQUEST} from './actions'

const initialState = {
  loading: false,
  persona: '',
  error: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PERSONA:
      return {...state, loading: true};
    case GET_PERSONA:
      return {...state, loading: false, persona: action.payload};
    case FAILED_REQUEST:
      return {...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default reducer;
