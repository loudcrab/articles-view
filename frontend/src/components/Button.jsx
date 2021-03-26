import { Box, Button as ButtonThemeUI } from 'theme-ui'

export const Button = (props) => {
  return (
    <Box
      sx={{
        margin: '16px',
      }}
    >
      <ButtonThemeUI sx={{ width: '100%', backgroundColor: '#23adad' }} {...props} />
    </Box>
  )
}
