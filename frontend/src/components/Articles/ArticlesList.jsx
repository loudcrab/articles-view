import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box, Spinner } from 'theme-ui'

import { ArticleCard } from './'
import { getArticles } from '../../actions/articles'

export const ArticlesList = ({ isSearch, perPage = 100, page }) => {
  const dispatch = useDispatch()

  const isFetch = useSelector((state) => state.articles.isFetch)
  const articles = useSelector((state) => state.articles.data)
  const filteredData = useSelector((state) => state.articles.filteredData)

  useEffect(() => {
    dispatch(getArticles(page - 1, perPage))
  }, [page])

  const articlesToMap = isSearch ? filteredData : articles

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: '16px' }}>
        <Box>Название</Box>
        <Box>Дата</Box>
      </Box>
      {isFetch ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Spinner />
        </Box>
      ) : (
        articlesToMap.map((item) => <ArticleCard key={item.id} hideText {...item} />)
      )}
    </Box>
  )
}
