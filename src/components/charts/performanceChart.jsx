
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function Performance(props){
const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];


    return (
        <div className='card' style={{backgroundColor: "#282D30"}}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={props.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" stroke='#dcd7d7'/>
          {/* <PolarRadiusAxis angle={30} domain={[0, 150]} /> */}
         
          <Radar name="Lily" dataKey="B"  fill="#E60000" fillOpacity={0.6} />
         
        </RadarChart>
        
      </ResponsiveContainer>
      </div>
    );
  }

  export default Performance
  // <PolarAngleAxis dataKey="kind" angleAxisId={0} tickLine={false} tick={{ fontSize: 10 }} stroke='#FFF' />
  // <PolarGrid radialLines={false}/>
  // <Radar name="Performances" dataKey="value" fill="#FF0101" fillOpacity={0.6} />