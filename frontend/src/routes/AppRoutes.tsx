import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import SingleTodo from "../pages/SingleTodo"
import Update from "../pages/Update"
import CreateTodo from "../pages/CreateTodo"

const AppRoutes = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/:id" element={<SingleTodo/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
        <Route path="/create" element={<CreateTodo/>}></Route>
      </Routes>
    </div>
  )
}

export default AppRoutes