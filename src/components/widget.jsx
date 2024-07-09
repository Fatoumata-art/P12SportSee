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
                    style: { backgroundColor: "#faeaea", color: "#FF0000"},
                    number: number,
                    title: "calories",
            };
            break;
            case "Protéine":
                data = {
                        icon: icon, 
                        style:{ backgroundColor: "#d6e2ea", color: "#4AB8FF"} ,
                        number: number,
                        title: "Protéines",
                };
                break;
                case "Glucide":
                    data = {
                            icon: icon, 
                            style:{ backgroundColor: "#e5e0cd", color: "#f9cf24"},
                            number: number,
                            title: "Glucides",
                    };
                    break;
                    case "Lipide":
                        data = {
                                icon: icon, 
                                style:{ backgroundColor: "#ead6dc", color: "#FD5181"},
                                number: number,
                                title: "Lipides",
                        };
                        break;
                        default:
                            break;
    }
   
  return (
    <div className="widget">
        <div className="widget-img" style={data.style}>
        <img className='icon'  src={data.icon} alt="icon" />
        </div>
        <div className='widget-text'>
        <h3>{data.number}</h3>
        <span>{data.title}</span>
        </div>
    </div>
  )
}

export default Widget