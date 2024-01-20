"use client"
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <Grid container bgcolor="#000" sx={{ justifyContent: "center", alignItems: "center" }}>

            <Grid container sm={11} xs={11} md={11} lg={11} sx={{
                my: 8,
                justifyContent: 'space-around'
            }}>


                <Grid container sm={6} md={2} lg={2} sx={{
                    alignItems: "center"
                }}>
                    <Box
                        component="img"
                        src='/Assets/logo.png'
                        sx={{
                            // bgcolor: "red",
                            width: { xs: 70, sm: 100, md: 100, lg: 140 },
                            height: { xs: 70, sm: 100, md: 100, lg: 140 },
                            ml: { xs: 5, md: 0 }
                        }}
                    />
                </Grid>

                <Grid container sm={6} md={2} lg={2} sx={{
                    // /    bgcolor: "red",
                    flexDirection: "column",
                    my: { xs: 2, sm: 3, md: 0 }
                }}>

                    {
                        [
                            {
                                text: "Gallery",
                                path: '/allery'
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

                        ].map((data, index) =>

                            <Typography sx={{
                                color: "#FFF",
                                ml: { xs: 5, md: 0 },
                                mt: {
                                    xs: index > 0 ? .3 : 0,
                                    md: index > 0 ? 1 : 0,
                                    lg: index > 0 ? 1 : 0
                                },
                                fontSize: { xs: 11, sm: 15, md: 17, lg: 17 },
                                cursor: "pointer",
                                width: 'fit-content',
                                '&:hover': {
                                    color: '#FFAF00',
                                    transition: 'all 0.1s ease-in-out 0.1s',
                                    fontWeight: "bold",
                                }
                            }}>{data.text}</Typography>

                        )
                    }

                </Grid>

                <Grid container sm={6} md={2} lg={3} sx={{
                    bgcolor: "",
                    my: { xs: 2, sm: 3, md: 2 },
                    flexDirection: 'row'
                }}>

                    <Box sx={{ height: '100%', bgcolor: "red" }}>
                        A
                    </Box>

                    <Box>
                        {
                            [
                                "Shuhadah Building,Floor #2,Flat #2",
                                "AL-Madinah Al-Munawarah Road",
                                "Near Masjid King Saud, Al Sharafeeyah",
                                "Jeddah 23218, Kingdom of Saudi Arabia "
                            ].map((data, index) =>


                                <Typography sx={{
                                    color: "#FFF",
                                    ml: { xs: 5, md: 0 },
                                    mt: {
                                        xs: index > 0 ? 0 : 0,
                                        md: index > 0 ? 1 : 0,
                                        lg: index > 0 ? 1.5 : 0
                                    },
                                    fontSize: { xs: 11, sm: 15, md: 17, lg: 17 },
                                    cursor: "pointer",
                                    width: 'fit-content',
                                }}>{data}</Typography>

                            )

                        }
                    </Box>




                </Grid>


                <Grid container sm={6} md={2} lg={2} sx={{
                    bgcolor: "red", justifyContent: 'center', alignItems: "center",
                    my: { xs: 3, sm: 3, md: 0 }
                }}>
                    <Box
                        component="img"
                        src='/Assets/logo.png'
                        sx={{ bgcolor: "" }}
                    />
                </Grid>



            </Grid>









        </Grid >
    )
}
