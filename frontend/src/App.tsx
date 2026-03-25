import { useContext } from 'react'
import { Nav } from './components/Nav'
import AppRoutes from './routes/AppRoutes'
import { UserContext } from './context/UserContext'
import axios from 'axios'

const App = () => {
  const {user, setUser} = useContext(UserContext)!

  const onLogout = async () => {
    const res = await axios.get("http://localhost:3000/api/user/logout", {
      withCredentials: true
    })
    alert(res.data.message)
    setUser(null)
  }
  
  return (
    <div className='w-screen min-h-screen bg-gray-900'>
     {user ? <Nav isLoggedIn = {true} onLogout={onLogout} /> : <Nav isLoggedIn={false} onLogout={onLogout}/>}
      <AppRoutes/>
    </div>
  )
}

export default App;