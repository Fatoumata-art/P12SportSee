// import List from "./listItem"
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
//import {Link } from "react-router-dom";
function SideMenu(){

    const navVertical = [
        {
            path:"/",
            icon: <SelfImprovementIcon />
        }, 
        {    
            path:"/",
            icon: <PoolIcon />
        }, 
        {
            path:"/",
            icon: <DirectionsBikeIcon />
        }, 
        {
            path:"/",
            icon: <FitnessCenterIcon />}, 
    ]

    return (
        <aside className='side-menu'> 
                <ul  className="navigation_verticale">
                    {
                        navVertical.map((item, index) => (
                            //<Link to={item.path}>
                                <li className="side-menu-list-icon" key={index}>{item.icon}</li>
                         // </Link>
                        ))
                    }
                    
                </ul>
                <p>Copiryght, SportSee 2020</p>
        </aside>
    )
}

export default SideMenu
 