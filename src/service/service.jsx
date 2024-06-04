import React, { useState, useEffect } from 'react'
import { fetchUserData } from './api'

const Service = () => {

  const [backEndData, setbackEndData] = useState([])

  useEffect(() => {
    fetchUserData().then( async res => {
     let data = await res.data
      setbackEndData(() => data);
      if(backEndData){
        console.log(backEndData)
      }
      console.log(backEndData);

    }) // pass an url if fetching from server(backend)
  },[])

  return (
    <div>data</div>
  )
}

export default Service