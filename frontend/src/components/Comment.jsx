import { Box, Text } from 'theme-ui'

export const Comment = ({ user, text }) => {
  return (
    <Box
      sx={{
        margin: '16px',
        color: '#23adad',
      }}
    >
      <Text as="h1">{user}</Text>
      <Text>{text}</Text>
    </Box>
  )
}
