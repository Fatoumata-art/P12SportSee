import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis,  CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart(props){

  // const data = [
  //   {
  //     name: '1',
  //     calorie: 4000,
  //     pv: 2400,
     
  //   },
  //   {
  //     name: '2',
  //     uv: 3000,
  //     pv: 1398,
      
  //   },
  //   {
  //     name: '3',
  //     uv: 2000,
  //     pv: 9800,
      
  //   },
  //   {
  //     name: '4',
  //     uv: 2780,
  //     pv: 3908,
      
  //   },
  //   {
  //     name: '5',
  //     uv: 1890,
  //     pv: 4800,
     
  //   },
  //   {
  //     name: '6',
  //     uv: 2390,
  //     pv: 3800,
      
  //   },
  //   {
  //     name: '7',
  //     uv: 3490,
  //     pv: 4300,
     
  //   },
  //   {
  //     name: '8',
  //     uv: 3490,
  //     pv: 4300,
     
  //   },
  //   {
  //     name: '9',
  //     uv: 3490,
  //     pv: 4300,
     
  //   },
  //   {
  //     name: '10',
  //     uv: 3490,
  //     pv: 4300,
     
  //   },
  // ];
  
 
   
  
    
      return (
        <div className='card'>
           <h3 className='title'>Activité quotidienne</h3>
           <Legend />
        <ResponsiveContainer width="100%" height="90%" marginTop="30px">
          <BarChart
            width={500}
            height={300}
            data={props.data}
            key={Chart}
            // margin={{
            //   top: 20,
            //   right: 30,
            //   left: 20,
            //   bottom: 5,
            // }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={props.name} />
            
            
          
            <Bar yAxisId="left" dataKey={props.calories} fill="#282D30" />
            <Bar yAxisId="right" dataKey={props.poids} fill="#E60000" />
          </BarChart>
        </ResponsiveContainer>
        </div>
      );
    }
 


export default Chart