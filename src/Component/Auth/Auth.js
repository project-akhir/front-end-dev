import React, { useState } from "react"
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input'
import { signin, signup } from '../../actions/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ParticlesBg from "particles-bg";
import {useSelector} from 'react-redux'
import { getUser } from "../../actions/auth"


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Auth = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const navigate = useNavigate()
    const [isUser, setUser] = useState(false)

    const handleShowPassword = () => setShowPassword(!showPassword)

    const check = useSelector((state) => state.auth)
    // console.log(check, "DISINI USE SELECTOR=======");
    //dispatch(getUser())

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // console.log(formData);
        
        if(isSignUp){
            dispatch(signup(formData, navigate))
        }else{
            dispatch(signin(formData, navigate))
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const switchMode = () => {
        setFormData(initialState)
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        setShowPassword(false)
    }

    const userCheck = (e) => {
        dispatch(getUser())
        setFormData({ ...formData, [e.target.name]: e.target.value})
        const checkUser = check.filter((user) => user.email === e.target.value)

        if(checkUser.length === 0){
            setUser(false)
        }else{
            setUser(true)
        }
    }

    return(
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && ( 
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half error={false}/>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus half error={false}/>
                                </>
                            )}
                            <Input name="email" label='Email Address' helperText={isUser && isSignUp ? "You already have an account" : "" } error={isUser && isSignUp ? true : false } type="email" handleChange={userCheck} />
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} disabled={isUser && isSignUp ? true : false} >
                        { isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid item>
                        <Button onClick={switchMode}>
                            { isSignUp ? 'Already have an account? Sign In' : "Don't have an account ?  Sign Up"}
                        </Button>
                    </Grid>
                </form>
            </Paper>
            <ParticlesBg type="cobweb" bg={true} num={15}/> 
        </Container>
        )
}

export default Auth