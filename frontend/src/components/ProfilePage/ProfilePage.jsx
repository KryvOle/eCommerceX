import React, {useEffect, useState } from 'react'
import Header from '../MainPage/Header/Header'
import { Box, Button, Grid } from '@mui/material'
import PageTitle from '../MensWatchPage/PageTitle'
import Footer from '../MainPage/Footer/Footer'
import LoginTextField from '../LoginPage/LoginTextField'
import NavBar from '../NavBar/NavBar'

function ProfilePage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <Box sx={{
        backgroundColor: "#171A25",
        minHeight: "103vh",
        height: "fit-content",
    }}>
        <Header handleMenu={() => setIsMenuOpen(true)} />
        <NavBar menuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
        <PageTitle title="Профіль" />
        <LoginTextField title="ПІБ" type="text" />
        <LoginTextField title="E-mail/Номер телефону" type="text" />
        <LoginTextField title="Населений пункт" type="text" />
        <LoginTextField title="Адреса" type="text" />
        <LoginTextField title="Номер картки" type="text" />
        <Grid container justifyContent='center'>
            <Button variant='outlined' sx={{
            color: "white",
            borderColor: "white",
            fontFamily: "Montserrat",
            fontSize: '22px',
            fontWeight: "500px",
            textTransform: 'none',
            width: '250px',
            height: '70px',
            borderRadius: '40px',
            marginTop: '20px',
            "&:hover": {
                backgroundColor: "white",
                color: 'black',
            },
        }}>Зберегти</Button>
        </Grid>
        <Footer />
    </Box>
  )
}

export default ProfilePage