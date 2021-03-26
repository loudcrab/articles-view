import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { Box } from 'theme-ui'

import { removeArticle } from '../../reducers/articlesReducer'

export const ArticleCard = ({ title, date, id, text, hideText }) => {
  const dispatch = useDispatch()

  const handleRemove = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(removeArticle(id))
  }

  const hover = hideText
    ? {
        '&:hover': {
          '.article': {
            ml: hideText ? '60px' : '8px',
          },
          img: {
            display: 'block',
          },
        },
      }
    : {}

  return (
    <Box
      as={Link}
      to={`/article/${id}`}
      sx={{
        textDecoration: 'none',
        position: 'relative',
        ...hover,
      }}
    >
      <Box
        as="img"
        src="https://api.icons8.com/download/86bf59698882ab1aa548517cab3908a699136acb/Color/PNG/512/Very_Basic/cancel-512.png"
        sx={{
          width: '40px',
          height: '40px',
          position: 'absolute',
          top: '16px',
          left: '6px',
          zIndex: 2,
          display: 'none',
        }}
        onClick={handleRemove}
      />
      <Box
        className="article"
        sx={{
          backgroundColor: '#23adad',
          p: 16,
          mt: '8px',
          borderRadius: '8px',
          mx: '8px',
        }}
      >
        <Box
          sx={{
            display: 'flex',

            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ color: '#fff' }}>{title}</Box>
          <Box sx={{ color: '#fff' }}>{new Date(date).toLocaleDateString()}</Box>
        </Box>
        <Box sx={{ mt: '16px', color: '#fff', display: hideText ? 'none' : 'block' }}>{text}</Box>
      </Box>
    </Box>
  )
}
