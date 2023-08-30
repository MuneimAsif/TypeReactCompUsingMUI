import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchCom() {
  return (<>
    <FormGroup sx={{marginInline:70}}>
      <FormControlLabel control={<Switch defaultChecked />} label="Error One" />
      <FormControlLabel required control={<Switch />} color='success' label="Error Two" />
      <FormControlLabel disabled control={<Switch />} label="Error Can't Fixed" />
    </FormGroup>

    </>
  );
}

