import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch  } from 'react-redux'

import { Box } from 'theme-ui'

import { getArticleAndComments } from '../actions/articles'
import { ArticleCard, Comment, NewComment } from '../components'

export const Article = () => {
  const { id } = useParams()

  const currentArticle = useSelector((state) => state.articles.currentArticle)

  const isFetchArticle = useSelector((state) => state.articles.isFetchArticle)

  const dispatch = useDispatch()
  useEffect(() => {
    if (!id) return
    dispatch(getArticleAndComments(id))
  }, [id])

  return (
    <Box>
      {isFetchArticle ? (
        'loading'
      ) : (
        <>
          <ArticleCard {...currentArticle} />
          <NewComment article={id} />
          {currentArticle.records.map((item) => (
            <Comment key={item.id} {...item} />
          ))}
        </>
      )}
    </Box>
  )
}
