// import List from "./listItem"
import { IoMdBicycle } from "react-icons/io";
//import {Link } from "react-router-dom";
function Sidebar(){

    const navVertical = [
        {
            path:"/",
            icon: <IoMdBicycle />
        }, 
        {    
            path:"/",
            icon: <IoMdBicycle />
        }, 
        {
            path:"/",
            icon: <IoMdBicycle />
        }, 
        {
            path:"/",
            icon: <IoMdBicycle />}, 
    ]

    return (
        <aside className='sideBar'> 
                <ul  className="navigation_verticale">
                    {
                        navVertical.map((item, index) => (
                            //<Link to={item.path}>
                                <li className="sideBar-list-icon" key={index}>{item.icon}</li>
                         // </Link>
                        ))
                    }
                </ul>
                <p>Copiryght, SportSee 2020</p>
        </aside>
    )
}

export default Sidebar
 