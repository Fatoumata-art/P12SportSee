import WhatshotIcon from '@mui/icons-material/Whatshot';
import EggIcon from '@mui/icons-material/Egg';
import AppleIcon from '@mui/icons-material/Apple';
import LunchDiningIcon from '@mui/icons-material/LunchDining';

const Widget = ({type}) => {
   
    let data ;
   
    switch( type ){
        case "Calorie":
            data = {
                    icon: <WhatshotIcon  
                    className="icon" 
                    style={{ backgroundColor: "#e2c5c5", color: "#FF0000", fontSize: "small"}} />,
                    number: "1,930KCal",
                    title: "calories",
            };
            break;
            case "Protéine":
                data = {
                        icon: <EggIcon
                        className="icon" 
                    style={{ backgroundColor: "#d6e2ea", color: "#4AB8FF", fontSize: "small"}} />,
                        number: "1,930KCal",
                        title: "Protéines",
                };
                break;
                case "Glucide":
                    data = {
                            icon: <AppleIcon  
                            className="icon" 
                            style={{ backgroundColor: "#e5e0cd", color: "#f9cf24", fontSize: "small"}} />,
                            number: "1,930KCal",
                            title: "Glucides",
                    };
                    break;
                    case "Lipide":
                        data = {
                                icon: <LunchDiningIcon
                                className="icon" 
                                style={{ backgroundColor: "#ead6dc", color: "#FD5181", fontSize: "small"}} />,
                                number: "1,930KCal",
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