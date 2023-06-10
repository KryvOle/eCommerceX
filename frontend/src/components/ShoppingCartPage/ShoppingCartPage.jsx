import { Box, Grid } from '@mui/material'
import React from 'react'
import Header from '../MainPage/Header/Header'
import Footer from '../MainPage/Footer/Footer'
import PageTitle from '../MensWatchPage/PageTitle'
import ShoppingCartItem from './ShoppingCartItem'
import CartSum from './CartSum'
import CheckoutBtn from './CheckoutBtn'
import NavBar from '../NavBar/NavBar'

const array = [{title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},
                {title : "Fossil Leather Watch", price: "6873"},];

function ShoppingCartPage() {
  const watches = JSON.parse(localStorage.getItem('cart')).bucket

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Box sx={{
        backgroundColor: "#171A25",
        minHeight: "103vh",
        height: "fit-content",
    }}>
        <Header handleMenu={() => setIsMenuOpen(true)} />
        <NavBar menuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
        <PageTitle title="Кошик" />
        <Grid container spacing={2} justifyContent="center">
        {watches.map((watch, index) => (
          <Grid item key={index} xs={12} marginBottom="10px">
            <ShoppingCartItem
              image={watch.image}
              title={watch.name}
              price={watch.price}
            />
          </Grid>
        ))}
        </Grid>
        <CartSum items={array} />
        <CheckoutBtn />
        <Footer />
    </Box>
  )
}

export default ShoppingCartPage