import { Box } from '@theme-ui/components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Article, Catalog, Search } from './Pages'
import { NavBar } from './components/NavBar'
import { NewArticle } from './Pages/NewArticle'

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ width: 780 }}>
        <NavBar />
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/addpost" component={NewArticle} />
          <Route path="/article/:id" component={Article} />
          <Route path="/" component={Catalog} />
        </Switch>
      </Box>
    </BrowserRouter>
  )
}

export default App
