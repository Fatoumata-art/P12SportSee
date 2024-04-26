import Profil from './pages/profil'
import Header from './components/header'
import SideMenu from './components/sidemenu'




function App() {
 

  return (
      <div className='container'>
          <Header />
          <SideMenu />
          <Profil />
          {/* <Home /> */}
      </div>
  )
}

export default App
