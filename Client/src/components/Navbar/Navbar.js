import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, Avatar, Button } from '@material-ui/core'
import useStyles from './styles'
import kids from '../Posts/image/kids.png'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const classes = useStyles()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const logout = () => {
    dispatch({ type: 'LOGOUT' })

    history.push('/')
    setUser(null)
  }
  console.log(user)

  useEffect(() => {
    const token = user?.token
    setUser(JSON.parse(localStorage.getItem('profile')))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.nrandContainer}>
        <Typography component={Link} to='/' className={classes.heading} varaint='h1' align='center'> Clubs </Typography>
        <img className={classes.image} src={kids} alt='clubs' height='60' />
      </div>
      <Toolbar className={classes.toolbar}>
        {user
          ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
              <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
            </div>

            )
          : (
            <Button component={Link} to='/auth' variant='contained' color='primary'>Sign in</Button>
            )}
      </Toolbar>

    </AppBar>
  )
}

export default Navbar
