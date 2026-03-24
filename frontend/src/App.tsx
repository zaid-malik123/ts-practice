import { Nav } from './components/Nav'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className='w-screen min-h-screen bg-gray-900'>
     <Nav/> 
      <AppRoutes/>
    </div>
  )
}

export default App