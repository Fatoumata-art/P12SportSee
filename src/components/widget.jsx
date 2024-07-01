import WhatshotIcon from '@mui/icons-material/Whatshot';
import EggIcon from '@mui/icons-material/Egg';
import AppleIcon from '@mui/icons-material/Apple';
import LunchDiningIcon from '@mui/icons-material/LunchDining';


const Widget = ({type, number, icon}) => {
   
    let data ;
   
    switch( type ){
        case "Calorie":
            data = {
                    icon: icon,  
                    className:"icon", 
                    style: { backgroundColor: "#e2c5c5", color: "#FF0000", fontSize: "small"},
                    number: number,
                    title: "calories",
            };
            break;
            case "Protéine":
                data = {
                        icon: <EggIcon
                        className="icon" 
                    style={{ backgroundColor: "#d6e2ea", color: "#4AB8FF", fontSize: "small"}} />,
                        number: number,
                        title: "Protéines",
                };
                break;
                case "Glucide":
                    data = {
                            icon: <AppleIcon  
                            className="icon" 
                            style={{ backgroundColor: "#e5e0cd", color: "#f9cf24", fontSize: "small"}} />,
                            number: number,
                            title: "Glucides",
                    };
                    break;
                    case "Lipide":
                        data = {
                                icon: <LunchDiningIcon
                                className="icon" 
                                style={{ backgroundColor: "#ead6dc", color: "#FD5181", fontSize: "small"}} />,
                                number: number,
                                title: "Lipides",
                        };
                        break;
                        default:
                            break;
    }
   
  return (
    <div className="widget">
        {data.icon}
        <div className='widget-text'>
        <h3>{data.number}</h3>
        <span>{data.title}</span>
        </div>
    </div>
  )
}

export default Widget