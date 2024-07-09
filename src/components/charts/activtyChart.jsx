
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import renderLegend from "./../ToolLip"

function Activity(props){

 
    
      return (
        <div className='card'>
           <h3 className='title'>Activité quotidienne</h3>
    
        <ResponsiveContainer width="100%" height="100%" >
          <BarChart
            width={500}
            height={300}
            margin={{
              top: 40,
              right: 30,
              left: 30,
              bottom: 0,
            }}
            data={props.data}
            key={Activity}
           
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={props.name} />
            <Legend iconType="circle" align="right"verticalAlign="top" wrapperStyle={{top: 20}} content={renderLegend}/>
            <Tooltip />
            <Bar yAxisId="left" dataKey="pv" fill="#282D30" barSize={10} radius={[5, 5, 0, 0]} unit='kg'/>
            <Bar yAxisId="right" dataKey="uv" fill="#E60000" barSize={10} radius={[5, 5, 0, 0]} unit='Kcal'/>
          </BarChart>
        </ResponsiveContainer>
        </div>
      );
    }
 


export default Activity