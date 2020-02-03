import { combineReducers } from 'redux'
import appReducer from './app/reducer'
import authReducer from './auth/reducer'

export const rootPersist = ['authReducer']
export const authPersist = ['authReducer']

export default combineReducers({
  appReducer,
  authReducer
})
