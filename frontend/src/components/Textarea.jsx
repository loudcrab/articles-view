import { Box, Textarea as TextareaThemeUi } from 'theme-ui'

export const Textarea = (props) => {
  return (
    <Box
      sx={{
        margin: '16px',
      }}
    >
      <TextareaThemeUi xs={{ width: '100%', height: '400px' }} {...props} />
    </Box>
  )
}
