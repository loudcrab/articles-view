import { useDispatch } from 'react-redux'
import { Box, Text } from 'theme-ui'

import { postNewComment } from '../actions/articles'
import { Textarea, Button } from '../components'

export const NewComment = ({ article }) => {
  const dispatch = useDispatch()

  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const form = e.target
          const comment = {
            text: form.text.value,
            user: 'Anon',
            article,
          }
          dispatch(postNewComment(comment))
          form.reset()
        }}
      >
        <Text sx={{ mx: '16px' }}>Текст комментария</Text>
        <Textarea xs={{ width: '100%', height: '400px' }} id="text" />
        <Button>Отправить</Button>
      </form>
    </Box>
  )
}
