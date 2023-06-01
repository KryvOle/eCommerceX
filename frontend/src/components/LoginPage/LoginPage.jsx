import { Box } from '@mui/material'
import React from 'react'
import Header from '../MainPage/Header/Header'
import LoginText from './LoginText'
import LoginTextField from './LoginTextField'
import LoginActionBtn from './LoginActionBtn'
import SignupInvite from './SignupInvite'
import Footer from '../MainPage/Footer/Footer'
import { signup_route } from '../Routing/Routes'
import NavBar from '../NavBar/NavBar'

function LoginPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Box sx={{
        backgroundColor: "#171A25",
        minHeight: "103vh",
        maxHeight: "fit-content",
    }}>
        <Header handleMenu={() => setIsMenuOpen(true)} />
        <NavBar menuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
        <LoginText title="Вхід" />
        <LoginTextField title="Логін" type="email" />
        <LoginTextField title="Пароль" type="password" />
        <LoginActionBtn />
        <SignupInvite invite="Ще нема акаунта?" link="Зареєструватися" to={signup_route}/>
        <Footer />
    </Box>
  )
}

export default LoginPage