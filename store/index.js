import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import decksReducer from './reducers/decksReducer';
const rootReducer = combineReducers({
    decksReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));