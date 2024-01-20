"use client"
import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export default function MobileHeader() {

  const [menu, setMenu] = React.useState(false)
  const router = useRouter();


  const navbarItems = [
    {
      text: "Home",
      path: '/'
    },
    {
      text: "Gallery",
      path: '/gallery'
    },
    {
      text: "About Us",
      path: '/about'
    },
    {
      text: "Career",
      path: '/career'
    },
    {
      text: "Contact Us",
      path: '/contact'
    },

  ]

  const MenuBar = () => {

    setMenu(!menu)

  }

  return (

    <Grid container sx={{
      display: { xs: "block", md: "none" },
      flexDirection: 'column-reverse', alignItems: "center",
      bgcolor: "red",
      zIndex: 400,
    }}>

      <Grid container sx={{
        display: 'flex',
        position: "fixed",
        zIndex: "110", top: "0", left: "0",
        bgcolor: "#FFF",
        alignItems: 'center',
        py: 1,
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',

      }} >



        <Box
          onClick={() => router.push('/')}
          style={{ cursor: 'pointer' }}
          component="img"
          sx={{
            bgcolor: "#FFFF",
            height: 50,
            width: 50,
            ml: 2,
          }}
          alt="The house from the offer."
          src="/Assets/logo.png"
        />

        <Box
          // position="fixed" right="4px"
          sx={{
            bgcolor: '',
            ml: 'auto',
            mr: 2
          }}>

          {menu ? <CloseIcon sx={{ color: "#513328", fontSize: { xs: '2rem' } }} onClick={() => setMenu(!menu)} /> :
            <MenuIcon sx={{ color: "#513328", fontSize: "2rem" }} onClick={() => setMenu(!menu)} />}

        </Box>

      </Grid>

      <Box sx={{
        transition: "0.5s",
        width: "100%", height: "fit-content",
        position: "fixed", zIndex: "100", left: "0%", top: menu ? "60px" : "-40%",
        bgcolor: "#FFFF"
        // bgcolor: "red"

      }}>

        {
          navbarItems.map((data: any, index: any) =>

            <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1, bgcolor: "#FFFF" }}>

              <Box onClick={MenuBar} sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: '', }}>

                <Typography sx={{ color: "black", fontWeight: '550', cursor: 'pointer' }} onClick={() => router.push(data.path)}>{data.text}</Typography>

              </Box>

            </Box>
          )}

      </Box>

    </Grid >
  )
}