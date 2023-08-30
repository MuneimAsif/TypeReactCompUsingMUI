import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input() {
  return <>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        textAlign:'center',
        marginTop:10,
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label = "Isme Bhi Error :|"
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Phir se Error"
          placeholder="Andar Bhi Error"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline Error"
          multiline
          rows={3}
          defaultValue="Error Hi Error"
        />
      </div>
  
    </Box>
    </>  ;
}