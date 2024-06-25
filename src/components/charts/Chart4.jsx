import React from 'react'
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar'


const Chart4 = ({score}) => {

    const props = {
        percent: score , // is require
        colorSlice: "#E60000",
        colorCircle: "#f1eeee",
        fontColor: "",
        fontSize: "1.2rem",
        stroke: 5,
        size: 220,
    };
  return (
    <div className='card centered' >
        <h3 className='title'>Score</h3>
        <CircularProgressBar  {...props}/>
        <p className='desc'> de votre objectif </p>
    </div>
  )
}

export default Chart4