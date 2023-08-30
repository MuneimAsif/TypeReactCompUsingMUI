import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/material';

type selectType = {
    data:any[],
}
export default function DynamicSelect(props:selectType) {
const {data} = props
  return (
    <Box sx={{marginTop:10, marginBottom:10,marginInline:65}}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
        sx={{width:'200px',textAlign:'center'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
           label = 'Names'
         >
            {data.map((x,i)=>
          <MenuItem key={i} value = {x}>{x}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}
