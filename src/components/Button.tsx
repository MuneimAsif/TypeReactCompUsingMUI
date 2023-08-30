import { Label } from "@mui/icons-material";
import { Button } from "@mui/material"

type btnPropType = {
    btnLabel:string,
    btnColor:any,
}
export default function BtnCom(props:btnPropType){
        return<>
       <Button color={props.btnColor} variant="outlined" sx={{marginInline: 70,marginBlock:10}}>{props.btnLabel}</Button>
    
    </>
}