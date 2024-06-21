import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from  '@mui/material/Select';
import React, { useState, useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem';
import fetchUserData from "./api"
import {Link} from 'react-router-dom';


function Selectuser(){

  const [backEndData, setbackEndData] = useState([])
  const [user, setUser] = useState('');

  const handleChange = (event) => {
    setUser(event.target.value);
  };
  
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
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">User</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={user}
            label="user"
            onChange={handleChange}
          >
            {
              backEndData.data?.map((t) => (
                <Link to={`/profil/${t.id}`}>
                  <MenuItem key={t.id} value={t.userInfos.firstName}>{t.userInfos.firstName}</MenuItem>
                </Link>
                ))
            }
            </Select>
          </FormControl>
        </Box>
      );
    
  

}

export default Selectuser