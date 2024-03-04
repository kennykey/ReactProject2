import 'bootstrap/dist/css/bootstrap.min.css'
import { useRoutes } from 'react-router-dom'
import { routeList } from './Router/Route'


function App() {
  const element = useRoutes(routeList)
  return element
}

export default App
