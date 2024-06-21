import {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from  '@mui/material/Select';


function getUser(){
   
  const [user, setUser] = useState('');
  const handleChange = (event) => {
    setUser(event.target.value)
    
  };

  return (
    <Box sx={{ Width: 120 }}>
        
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Users</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={user}
          label="User"
          onChange={handleChange}
        >   
             
        
        </Select>
      </FormControl>
    </Box>
  );

}export default getUser


  