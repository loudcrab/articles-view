import { sortConfig } from '../config'
import { sorting } from '../utils'

const SET_ARTICLES = 'SET_ARTICLES'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_SEARCH = 'SET_SEARCH'
const SET_SORT_BY = 'SET_SORT_BY'
const ADD_NEW_ARTICLE = 'ADD_NEW_ARTICLE'
const REMOVE_ARTICLE = 'REMOVE_ARTICLE'
const SET_ARTICLE_AND_COMMENTS = 'SET_ARTICLE_AND_COMMENTS'
const SET_IS_FETCHING_ARTICLE = 'SET_IS_FETCHING_ARTICLE'
const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT'

const defaultState = {
  data: [],
  filteredData: [],
  isFetch: true,
  search: '',
  sortBy: sortConfig[0].value,
  isFetchArticle: true,
}

export default function articlesReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ARTICLES:
      return {
        ...state,
        data: action.payload.data,
        filteredData: action.payload.data,
        total: action.payload.total,
      }
    case REMOVE_ARTICLE:
      const data = [...state.data]
      const index = state.data.findIndex(({ id }) => id === action.payload)
      const newArray = [...data.slice(0, index), ...data.slice(index + 1, data.length)]
      return {
        ...state,
        data: newArray,
        filteredData: newArray,
        search: '',
      }
    case SET_SORT_BY:
      if (action.payload === 'default') {
        return { ...state }
      }
      const isSortByNew = 'new' === action.payload
      const sortData = sorting([...state.data], isSortByNew)

      const sortFilteredData =
        state.data.length === state.filteredData.length ? sortData : sorting([...state.filteredData], isSortByNew)

      return {
        ...state,
        sortBy: action.payload,
        data: sortData,
        filteredData: sortFilteredData,
      }
    case SET_SEARCH:
      const filteredData = action.payload
        ? [...state.data].filter(({ title }) => title.toLowerCase().includes(action.payload.toLowerCase()))
        : [...state.data]
      return {
        ...state,
        search: action.payload,
        filteredData,
      }
    case SET_ARTICLE_AND_COMMENTS:
      return {
        ...state,
        currentArticle: action.payload,
      }
    case SET_IS_FETCHING_ARTICLE:
      return {
        ...state,
        isFetchArticle: action.payload,
      }
    case SET_IS_FETCHING:
      return { ...state, isFetch: action.payload }
    default:
      return state
    case ADD_NEW_COMMENT:
        if(!state.currentArticle) return {...state}
      const newComment = {...action.payload}
      return {
        ...state,
        currentArticle: { ...state.currentArticle, records: [newComment, ...state.currentArticle.records ] },
      }
    case ADD_NEW_ARTICLE:
      return {
        ...state,
        data: [{ ...action.payload, text: undefined }, ...state.data],
      }
  }
}

export const addNewComment = (comment) => ({ type: ADD_NEW_COMMENT, payload: comment })
export const setIsFetchingArticle = (bool) => ({ type: SET_IS_FETCHING_ARTICLE, payload: bool })
export const setArticleAndComments = (currentArticle) => ({ type: SET_ARTICLE_AND_COMMENTS, payload: currentArticle })
export const removeArticle = (id) => ({ type: REMOVE_ARTICLE, payload: id })
export const addNewArticle = (article) => ({ type: ADD_NEW_ARTICLE, payload: article })
export const setSortBy = (sortBy) => ({ type: SET_SORT_BY, payload: sortBy })
export const setSearch = (search) => ({ type: SET_SEARCH, payload: search })
export const setArticles = (articles) => ({ type: SET_ARTICLES, payload: articles })
export const setIsFetching = (bool) => ({ type: SET_IS_FETCHING, payload: bool })
