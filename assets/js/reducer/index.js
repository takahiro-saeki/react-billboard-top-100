import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import main from './main'
import sample from './sample'

export const allMethod = combineReducers({
  main: main,
  sample: sample,
  routing: routerReducer
})
