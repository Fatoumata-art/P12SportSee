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
            icon: <SelfImprovementIcon className='icon' style={{fontSize: "2rem"}}/>
        }, 
        {    
            path:"/",
            icon: <PoolIcon style={{fontSize: "2rem"}}/>
        }, 
        {
            path:"/",
            icon: <DirectionsBikeIcon style={{fontSize: "2rem"}}/>
        }, 
        {
            path:"/",
            icon: <FitnessCenterIcon style={{fontSize: "2rem"}}/>}, 
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
 