import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from 'theme-ui'

import { getArticles } from '../actions/articles'
import { ArticlesList, Input, Select } from '../components'
import { sortConfig } from '../config'
import { setSearch, setSortBy } from '../reducers/articlesReducer'

export const Search = () => {
  const dispatch = useDispatch()
  const search = useSelector((state) => state.articles.search)
  const sortBy = useSelector((state) => state.articles.sortBy)

  useEffect(() => {
    dispatch(getArticles(0, 100))
  }, [])

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value))
  }
  const handleSelectChange = (sortBy) => {
    if (sortBy === 'default') {
      return
    }
    dispatch(setSortBy(sortBy))
  }

  return (
    <Box>
      <Input xs={{ width: '100%' }} value={search} onChange={handleSearchChange} />
      <Select options={sortConfig} handleChange={handleSelectChange} value={sortBy} />
      <ArticlesList isSearch={true} />
    </Box>
  )
}
