import Profil from './pages/profil'
import { Routes, Route  } from 'react-router-dom';



function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Profil />}></Route>
    </Routes>
  )
}

export default App
