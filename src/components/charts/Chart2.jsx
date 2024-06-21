
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  Text,
  AreaChart,
  Area,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

function Chart2 (props) {
const data = [
  {
    name: 'L',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'M',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'M',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'J',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'V',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'S',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'D',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


    return (
        <div className='card' style={{backgroundColor: "#E60000"}}>
           <p className="notes">Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="50%">
              <LineChart data={props.data} dataKey="name">
                
                <Line type="monotone" dataKey="pv" stroke="white" activeDot={{ r: 8 }}>
                  <LabelList dataKey="name" position="bottom" offset={20}/>
                </Line>
              </LineChart>
             
        </ResponsiveContainer>

       
      </div>
    );
  }

  export default Chart2
