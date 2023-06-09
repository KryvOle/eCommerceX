import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { home_route } from '../Routing/Routes'

function LoginActionBtn(props) {

    return (
        <Link to={home_route}>
            <Box sx={{
                textAlign: 'center',
            }}>
                <Button onClick={props.handleClick} variant='outlined' sx={{
                    color: "white",
                    borderColor: "white",
                    fontFamily: "Montserrat",
                    fontSize: '22px',
                    fontWeight: "500px",
                    textTransform: 'none',
                    width: '150px',
                    height: '40px',
                    borderRadius: '40px',
                    marginTop: '20px',
                    marginBottom: '70px',
                    "&:hover": {
                        backgroundColor: "white",
                        color: 'black',
                    },
                }}>
                    Увійти
                </Button>
            </Box>
        </Link>
    )
}

export default LoginActionBtn