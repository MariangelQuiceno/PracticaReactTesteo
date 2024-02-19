import {useRoutes} from 'react-router-dom'
import './App.css'
import { Home } from '../../practicaReactV1/src/components/Pages/Home/Home'
import {NotFound} from '../src/components/NotFound/NotFound'

const AppRoutes = () => {
  let routes = useRoutes([
    {path:'../../practicaReactV1/src/components/Pages/Home/Home', element: <Home/>},
    {path:'*', element: <NotFound/>},
  ])
  return routes
}


function App() {

  return (
    <>    
      <AppRoutes/>
    
    </>
  )
}

export default App
