import { Box, Input as InputThemeUI } from 'theme-ui'

export const Input = (props) => {
  return (
    <Box
      sx={{
        margin: '16px',
      }}
    >
      <InputThemeUI xs={{ width: '100%' }} {...props} />
    </Box>
  )
}
