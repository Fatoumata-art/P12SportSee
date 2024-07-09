import { Routes, Route  } from 'react-router-dom';
import Home from './pages/home'
import Profil from './pages/profil'
import Error from './pages/error'




function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profil/:id" element={<Profil />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
