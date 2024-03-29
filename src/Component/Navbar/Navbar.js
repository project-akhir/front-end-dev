import React, { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AppBar, Avatar, Button, Typography, Toolbar } from "@material-ui/core"
import { useDispatch } from "react-redux"
import decode from 'jwt-decode'

import useStyles from './styles'
import memories from '../../images/sun.png'
import { LOGOUT } from "../../actions/actionType"

const Navbar = () => {
    const classes = useStyles()
    const [user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const logout = () => {
      dispatch({ type: LOGOUT })

      navigate('/')

      setUser(null)
    }

    useEffect(() => {
      const token = user?.token

      if(token){
        const decodedToken = decode(token)
        if(decodedToken.exp * 1000 < new Date().getTime()){
          logout()
        }
      }

      setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return(
      <div className={classes.bg}>  
        <AppBar className={classes.appBar} sx={{ boxShadow: 3 }} position="static" color="inherit">
          <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant='h4' align='center'>COVID-HELP</Typography>
            {/* <img className={classes.image} src={memories} alt='memories' height='60'/> */}
          </div>
          <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                      <Toolbar className={classes.toolbar1}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                      </Toolbar>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                 ) : (
                    
                      <Button component={Link} to="/auth" variant="contained" className={classes.submit}>Sign In</Button>
                    
                )}
          </Toolbar>
        </AppBar>
                  </div>
    )
}

export default Navbar