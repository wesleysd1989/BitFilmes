import { combineReducers } from 'redux'
import todoReducer from './TodoReducers/'

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer