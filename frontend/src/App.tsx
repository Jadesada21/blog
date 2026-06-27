
import { Routes, Route } from 'react-router-dom'
import { useAuthInit } from './hook/useAuthInit'
import { ProtechedRoute } from './components/ProtechedRoute'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  useAuthInit()

  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>

      <Route element={<ProtechedRoute />} >

        <Route path="/" element={<Home />} />

      </Route >

    </Routes>
  )
}

export default App
