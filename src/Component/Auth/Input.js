import React from "react"
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core"
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'


const Input = ({ half, name, handleChange, label, autoFocus, type, handleShowPassword, helperText, error, disabled }) => (
    <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        error={error}
        disabled={disabled}
        helperText={helperText}
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={name === 'password' ? {
            endAdornment : (
                <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                        {type === 'password' ? <Visibility/> : <VisibilityOff/> }
                    </IconButton>
                </InputAdornment>
            )
        } : null }
        // InputProps={name === 'email' && helperText === 'You already have an account' ? error : null}
    />

    </Grid>
)

export default Input