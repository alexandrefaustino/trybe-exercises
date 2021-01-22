import charAPI from "../../services/charAPI";

export const GET_PERSONA = 'GET_PERSONA';
export const REQUEST_PERSONA = 'REQUEST_PERSONA';
export const FAILED_REQUEST = 'FAILED_REQUEST';


function get_PERSONA(arrayPersona) {
  return { type: GET_PERSONA, payload: arrayPersona };
}

function requestPersona() {
  return { type: REQUEST_PERSONA };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export function fetchGameOfThrones(name) {
  return async (dispatch) => {
    dispatch(requestPersona());

    try {
      const arrayPersona = await charAPI(name);
      dispatch(get_PERSONA(arrayPersona));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  }
}
