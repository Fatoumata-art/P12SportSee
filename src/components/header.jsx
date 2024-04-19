import logo from '../assets/logo.svg'
import List from "./listItem"
function Header(){

    const navigation = ["Accueil", "Profil", "Réglage", "Communauté"];
    return (
        <header className='header'> 
                <img src={logo} className='logo' alt="logo sportSee" />
                <ul className="navigation_horizontale">
                    
                        <List items={navigation}/>
                   
                </ul>
        </header>
    )
}

export default Header