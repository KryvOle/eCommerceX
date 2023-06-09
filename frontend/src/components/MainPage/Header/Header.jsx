import React, { useContext, useEffect, useState } from 'react'
import Menu from './Menu'
import LoginBtn from './LoginBtn'
import ShoppingCartIcon from './ShoppingCartIcon'
import SearchBar from './SearchBar'
import { Grid, IconButton } from '@mui/material'
import { Dehaze } from "@mui/icons-material";
import NavBar from '../../NavBar/NavBar'
import LogoutBtn from './LogoutBtn'
import ProfileIcon from './ProfileIcon'

function Header({handleMenu}) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
  }, []);

  const [logined, setLogined] = useState(false)
  useEffect(() => {
    const url = "http://localhost:8888/auth/user";
        fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            return res.json()
        }).then(data => {
           if(data.roles.indexOf('ADMIN') > -1 || data.roles.indexOf('USER') > -1){
            setLogined(true)
           } 
        })
            .catch(error => setLogined(false))
  }, [])

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" 
          paddingTop={{ xs: '20px', sm: '30px', md: '36px' }}
          paddingBottom={{ xs: '30px', sm: '36px', md: '40px' }}>
      <Grid item xs={2} sm={3} md={2} lg={5} container justifyContent={windowWidth >= 1000 ? 'flex-start' : 'center'}>
        {windowWidth >= 1200 && (
          <Grid item>
            <Menu />
          </Grid>
        )}
        {windowWidth < 1200 && (
          <Grid item>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              onClick={handleMenu}
              sx={{ ml: 1 }}
            >
              <Dehaze sx={{ color: 'white' }} />
            </IconButton>
          </Grid>
        )}
        {windowWidth < 1200 && (
          <Grid item>
            <NavBar />
          </Grid>
        )}
      </Grid>
      {!window.location.href.includes('login') &&
      !window.location.href.includes('signup') &&
      !window.location.href.includes('cart') &&
      !window.location.href.includes('details') &&
      !window.location.href.includes('profile') && 
      !window.location.href.includes('checkout') && (
        <Grid item xs={4} sm={3} md={3} lg={2} container justifyContent="center">
          <SearchBar />
        </Grid>
      )}
      <Grid item xs={2} sm={2} md={2} lg={1} container justifyContent={windowWidth >= 1000 ? 'flex-end' : 'center'}>
        <Grid><LoginBtn /><LogoutBtn /></Grid>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={1} container justifyContent={windowWidth >= 1000 ? 'flex-end' : 'center'}>
        <ShoppingCartIcon />
      </Grid>
      <Grid item xs={1} sm={2} md={2} lg={1} container justifyContent={windowWidth >= 1000 ? 'flex-end' : 'center'}>
        {logined && !window.location.href.includes('profile') && 
        (<ProfileIcon />)}
      </Grid>
    </Grid>
  )
}

export default Header