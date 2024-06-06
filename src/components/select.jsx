import {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Service from '../service/service';
import FormControl from '@mui/material/FormControl';
import Select from  '@mui/material/Select';


function Selectuser(){
   
  // const [user, setUser] = useState('');
  const [user, setUser] = useState('');

  const handleChange = (event) => {
    setUser(event.target.value);
  };

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
        <Service />
        </Select>
      </FormControl>
    </Box>
  );


}export default Selectuser


  