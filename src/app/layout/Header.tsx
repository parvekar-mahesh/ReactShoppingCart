import { ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
interface Props{
  darkMode: boolean
  handleThemeChange: ()=> void 
}
function Header(Props: Props) {
  const midLinks = [
    
        { title: 'catalog', path: '/catalog' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }  
  ]

    const rightLinks = [   
        { title: 'Login', path: '/login' },
        { title: 'Register', path: '/register' }  
  ]
  
  return (
      <AppBar position='static' sx={{mb:4}}>
          <Toolbar>
        <Typography component={NavLink} to="/"
        sx= {{color:'inherit', textDecoration:'none' }}
        > React-store</Typography>
        <Switch checked={Props.darkMode} onChange={Props.handleThemeChange}></Switch>
        
        <List sx={{display:'flex'}}>
          {midLinks.map(({ title, path })=> (
            <ListItem component={NavLink}  to={path} key={path} sx={{color:'inherit',typography:'h15'}}>
              {title.toUpperCase()}
          </ListItem>
))}
        </List>

        <IconButton size="large" edge='start' color='inherit' sx={{mr:2}}>
          <Badge badgeContent="5" color='secondary'></Badge>
          <ShoppingCart></ShoppingCart>
        </IconButton>

                <List sx={{display:'flex'}}>
          {rightLinks.map(({ title, path })=> (
            <ListItem component={NavLink}  to={path} key={path} sx={{color:'inherit',typography:'h15'}}>
              {title.toUpperCase()}
          </ListItem>
))}
        </List>
      </Toolbar>
      
 </AppBar>
  )
}

export default Header
