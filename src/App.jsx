import Home from './pages/home'
import Header from './components/header'
import SideMenu from './components/sidemenu'




function App() {
 

  return (
      <div className='container'>
          <Header />
          <SideMenu />
          <Home />
          {/* <Home /> */}
      </div>
  )
}

export default App
