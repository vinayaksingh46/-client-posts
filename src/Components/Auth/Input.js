import React from 'react'
import { TextField,Grid,InputAdornment,IconButton} from "@material-ui/core"
import Visiblity from "@material-ui/icons/Visibility"
import VisiblityOff from "@material-ui/icons/VisibilityOff"

function Input({half,name,label,type,handleChange,handleShowPassword,autofocus}) {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField 
            name={name}
            onChange={handleChange}
            label={label}
            type={type}
            variant="outlined"
            required
            fullWidth
            autoFocus={autofocus}
            InputProps={name==="password" && {endAdornment:(
                <InputAdornment position='end'>
                    <IconButton onClick={handleShowPassword}>
                        {type==='password' ? <Visiblity/>:<VisiblityOff/>}
                    </IconButton>
                </InputAdornment>
            )}}

        />

        </Grid>
    )
        
}

export default Input
