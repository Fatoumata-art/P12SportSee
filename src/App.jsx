import Home from './pages/home'
import Profil from './pages/profil'
import { Routes, Route  } from 'react-router-dom';



function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/profil/:id" element={<Profil />} />
    </Routes>
  )
}

export default App
