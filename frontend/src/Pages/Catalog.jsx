import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'

import { Box } from 'theme-ui'

import { ArticlesList, Pagination } from '../components'

export const Catalog = () => {
  const [page, setPage] = useState(1)
  const total = useSelector((state) => state.articles.total)

  const handleChangePage = useCallback((_page) => setPage(_page), [setPage])

  return (
    <Box>
      <Pagination total={total} page={page} handleChangePage={handleChangePage} />
      <ArticlesList page={page} perPage={2} />
    </Box>
  )
}
