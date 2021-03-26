import { useDispatch } from 'react-redux'
import { Box, Text } from 'theme-ui'

import { postNewArticle } from '../actions/articles'
import { Input, Textarea, Button, ArticlesList } from '../components'

export const NewArticle = () => {
  const dispatch = useDispatch()

  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const form = e.target
          const article = {
            text: form.text.value,
            title: form.title.value,
          }
          dispatch(postNewArticle(article))
          form.reset()
        }}
      >
        <Text sx={{ mx: '16px' }}>Название</Text>
        <Input id="title" xs={{ width: '100%' }} />
        <Text sx={{ mx: '16px' }}>Текст</Text>
        <Textarea xs={{ width: '100%', height: '400px' }} id="text" />
        <Button>Отправить</Button>
      </form>

      <ArticlesList />
    </Box>
  )
}
