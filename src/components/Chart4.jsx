import React from 'react'
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar'


const Chart4 = () => {

    const props = {
        percent: 12 , // is require
        colorSlice: "#E60000",
        colorCircle: "#f1eeee",
        fontColor: "",
        fontSize: "1.2rem",
        stroke: 5,
        size: 220,
    };
  return (
    <div className='card' >
        <h3 className='title'>Score</h3>
        <CircularProgressBar  {...props}/>
        <p className='desc'> de votre objectif </p>
    </div>
  )
}

export default Chart4