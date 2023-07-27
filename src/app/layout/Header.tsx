import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'
interface Props{
  darkMode: boolean
  handleThemeChange: ()=> void 
}
function Header(Props:Props) {
  return (
      <AppBar position='static' sx={{mb:4}}>
          <Toolbar>
              <Typography> React-store</Typography>
      </Toolbar>
      <Switch  checked={Props.darkMode} onChange={Props.handleThemeChange}></Switch>
 </AppBar>
  )
}

export default Header
