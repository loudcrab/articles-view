import { Box, Text } from 'theme-ui'

export const Pagination = ({ page, handleChangePage, total }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {new Array(Math.ceil(total / 2) || 0).fill(1).map((_, idx) => (
        <Text
          key={idx}
          className={idx === page - 1 ? 'selected' : ''}
          onClick={() => {
            handleChangePage(idx + 1)
          }}
          sx={{
            padding: '8px',
            margin: '8px',
            borderRadius: '4px',
            '&:visited': {
              color: 'inherit',
            },
            '&.selected': {
              backgroundColor: '#23adad',
              color: '#FFF',
            },
          }}
        >
          {idx + 1}
        </Text>
      ))}
    </Box>
  )
}
