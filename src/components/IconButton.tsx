import Button from '@mui/material/Button';
import ErrorIcon from '@mui/icons-material/Error';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Stack from '@mui/material/Stack';
type iconBtnProp = {
    label: string,
}

export default function IconLabelButtons(props:iconBtnProp) {
    return (
        <Stack sx={{marginInline:55}} direction="row" spacing={2}>
            <Button variant="outlined" sx={{paddingInline:'40px'}} startIcon={<ErrorIcon />}>{props.label}</Button>
            <Button variant="contained" sx={{paddingInline:'40px'}} endIcon={<ErrorOutlineIcon />}>{props.label}</Button>
        </Stack>
    );
}