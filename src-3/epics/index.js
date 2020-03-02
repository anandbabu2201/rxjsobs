import { combineEpics } from 'redux-observable';
import { getDataEpic } from './data'

export default combineEpics(
  getDataEpic
)
