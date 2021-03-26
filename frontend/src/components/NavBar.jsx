import { Link } from 'react-router-dom'

import { Box, Text } from 'theme-ui'

import { navBarConfig } from '../config'

export const NavBar = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {navBarConfig.map((props, idx) => (
        <NavBarItem key={idx} {...props} />
      ))}
    </Box>
  )
}

const NavBarItem = ({ href, title }) => {
  return (
    <Text
      as={Link}
      to={href}
      sx={{
        textDecoration: 'none',
        padding: '8px',
        margin: '8px',
        borderRadius: '4px',
        '&:visited': {
          color: 'inherit',
        },
        border: '2px solid #23adad',
        '&.selected': {
          backgroundColor: '#23adad',
          color: '#FFF',
        },
      }}
    >
      {title}
    </Text>
  )
}
