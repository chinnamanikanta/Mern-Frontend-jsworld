import {createStore, applyMiddleware} from 'redux';
import { userReducer } from './reducers/usersReducer';
import thunk from 'redux-thunk';
import {api} from '../Utils/api.utils';
import { Toast } from '../Utils/toast'
import {rootReducer} from './reducers/rootReducer'

export const store = createStore(rootReducer,applyMiddleware(thunk.withExtraArgument({api,Toast})))