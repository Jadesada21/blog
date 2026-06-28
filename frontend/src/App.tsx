
import { Routes, Route } from 'react-router-dom'
import { useAuthInit } from './hook/useAuthInit'
import { ProtechedRoute } from './components/ProtechedRoute'
import Home from './pages/Home'

function App() {
  useAuthInit()

  return (
    <Routes>
      <Route path="/" element={<Home />} />


      <Route element={<ProtechedRoute />} >

      </Route >

    </Routes>
  )
}

export default App
