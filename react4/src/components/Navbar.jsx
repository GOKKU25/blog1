import { AppBar,  Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<AppBar position="static" sx={{ backgroundColor: 'lightblue' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,color: 'black'}}>BLOG APP</Typography>
        <Link to="/blogs" style={{ textDecoration: 'none' }}>
          <Button sx={{ color: 'black' }}>HOME</Button> 
        </Link>
        <Link to="/addblogs" style={{ textDecoration: 'none' }}>
          <Button sx={{ color: 'black' }}><i>ADDBLOGS</i></Button> 
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button sx={{ color: 'black' }}>LOGOUT</Button> 
        </Link>
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navbar