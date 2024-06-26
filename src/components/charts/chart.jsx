import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart(props){

 
    
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
            key={Chart}
           
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={props.name} />
            <Legend legendType="circle" align="right"verticalAlign="top" wrapperStyle={{top: 20}}/>
            <Tooltip />
            <Bar yAxisId="left" dataKey="uv" fill="#282D30" barSize={15} radius={8}/>
            <Bar yAxisId="right" dataKey="pv" fill="#E60000" barSize={15} radius={8}/>
          </BarChart>
        </ResponsiveContainer>
        </div>
      );
    }
 


export default Chart