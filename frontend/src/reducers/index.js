import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import articlesReducer from './articlesReducer'

const rootReducer = combineReducers({
  articles: articlesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
