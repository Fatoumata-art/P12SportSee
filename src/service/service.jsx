import React, { useState, useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem';
import fetchUserData from "./api"


function Service(){

  const [backEndData, setbackEndData] = useState([])

  
  useEffect(() => {
    // Je recupère les données avec fetchUserData() 
    // et je remplie directement setBackendData(() => data)
    fetchUserData()
    .then( (data) =>
     setbackEndData(() => data)
    )
    .catch((error) => console.log(error))
  },[])

    console.log(backEndData)
    // ET j'affiche les données
    return (
      backEndData.data?.map((t) => {
          return (

            <MenuItem key={t.id}>{t.userInfos.firstName}</MenuItem>
          )
      })
    )

}

export default Service