const CLIENTS = [];

function listClientsReducer(state = CLIENTS, action) {
  switch(action.type) {
    case 'ADDCLIENTS':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default listClientsReducer;
