import {createStore, combineReducers} from 'redux';
import { listClientsReducer } from './reducer/Clients.reducer';

const rootReducer = combineReducers({
  listClientsReducer,
});

const store = createStore(rootReducer);

export default store;
