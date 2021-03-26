import axios from 'axios'

import { setIsFetching, setArticles, addNewArticle, setArticleAndComments, setIsFetchingArticle, addNewComment } from '../reducers/articlesReducer'

export const getArticles = (offset = 0, limin = 2) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true))
    const response = await axios.get(`/api/article?limit=${limin}&offset=${offset * limin}`)

    dispatch(setArticles(response.data))
    dispatch(setIsFetching(false))
  }
}

export const postNewArticle = (article) => {
  return async (dispatch) => {
    const response = await axios.post(`/api/article`, article)
    dispatch(addNewArticle(response.data))
  }
}

export const getArticleAndComments = (article) => {
  return async (dispatch) => {
    dispatch(setIsFetchingArticle(true))

    const responseArticle = await axios.get(`/api/article/${article}`)
    const responseComments = await axios.get(`/api/comment?article=${article}`)


    dispatch(setArticleAndComments({ ...responseArticle.data, ...responseComments.data }))
    
    dispatch(setIsFetchingArticle(false))
  }
}

export const postNewComment = (comment) => {
  return async (dispatch) => {
    const response = await axios.post(`/api/comment`, comment)
    dispatch(addNewComment(response.data))
  }
}