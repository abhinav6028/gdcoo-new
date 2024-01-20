"use client"
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function WhatWeWillDo() {
    return (
        <Grid xs={10} sm={9} md={10} lg={10} container sx={{
            justifyContent: "center", alignItems: "center",
            bgcolor: ''
        }}>
            <Box sx={{ my: 1 }}>

                <Typography sx={{
                    fontSize: { xs: 18, sm: 25, md: 33, lg: 35 },
                    fontWeight: "bold",
                    mt: 2,
                    fontFamily: "Kulim Park"
                }}>What We Build</Typography>

                <Box sx={{
                    width: { xs: 50, sm: 70, md: 90, lg: 100 },
                    height: { xs: 1.5, sm: 1.5, md: 2, lg: 3 }, borderRadius: "10px",
                    bgcolor: "#A9A3A3", ml: 'auto'
                }} />

            </Box>

            {/* WHAT WE WILL DO SECTION */}

            <Grid container sx={{ mt: { xs: -1, sm: 1, md: 2, lg: 2 } }}>

                <Grid container md={6} lg={6} sx={{
                    bgcolor: "",
                    justifyContent: "center", alignItems: "center"
                }}>


                    {
                        [
                            {
                                heading: 'Building',
                                img: "/Assets/Icons/01..png",
                                txt: "Our construction company stands as a beacon of innovation, craftsman and reliability"
                            },
                            {
                                heading: 'Civil Infrastrucuture',
                                img: "/Assets/Icons/02..png",
                                txt: "Our construction company stands as a beacon of innovation, craftsman and reliability"
                            },
                            {
                                heading: 'Heavy Industrial',
                                img: "/Assets/Icons/03..png",
                                txt: "Our construction company stands as a beacon of innovation, craftsman and reliability"
                            }
                        ].map((data, index) =>

                            <Grid container sx={{
                                bgcolor: "", flexDirection: "row",
                                mt: { xs: 2, sm: 2, md: 0, lg: index > 0 ? 5 : 0 },
                            }}>

                                <Grid xs={2} sm={2} md={2} lg={2} container>
                                    <Box
                                        component='img'
                                        src={data.img}
                                        bgcolor=""
                                        sx={{
                                            width: { xs: 60, sm: 70, md: 75, lg: 90 },
                                            height: { xs: 25, sm: 35, md: 35, lg: 50 }
                                        }}
                                    />
                                </Grid>

                                <Grid xs={10} sm={10} md={10} lg={10} container sx={{
                                    mt: { md: .8, lg: 0 }
                                }}>
                                    <Box sx={{ ml: { xs: 2, sm: -1, md: 2, lg: 2 }, width: "%" }}>
                                        <Typography sx={{
                                            fontSize: { xs: 16, sm: 20, md: 23, lg: 26 },
                                            fontWeight: 400, fontFamily: 'M PLUS 2'

                                        }}>{data.heading}</Typography>

                                        <Box>
                                            <Typography sx={{
                                                fontSize: { xs: 12, sm: 15, md: 17, lg: 19 },
                                                width: { xs: "100%", sm: "80", md: "100%", lg: "100%" },
                                                mt: { xs: .5, sm: 0, md: 0, lg: 1 },
                                                fontFamily: 'M PLUS 2'
                                            }}>
                                                Our construction company stands as a beacon of innovation,
                                                Our construction company stands as a beacon of innovation,
                                            </Typography>
                                        </Box>

                                    </Box>
                                </Grid>
                            </Grid>

                        )
                    }

                </Grid>

                <Grid container md={6} lg={6} sx={{
                    //bgcolor: "red",
                    justifyContent: { xs: "center", sm: 'center', md: 'end', lg: "center" },
                    mt: { xs: 3, sm: 5, md: 0, lg: 0 },
                    alignItems: 'center'
                }}>
                    <Grid
                        xs={10} sm={11} lg={9}
                        component='img'
                        src="/Assets/Images/whatWoDoImage.png"
                        sx={{
                            height: { xs: 200, sm: 300, md: 350, lg: 350 },
                        }}
                    />
                </Grid>

            </Grid>

            {/* PROJECT SHOWCASING SECTION */}

            <Grid container sx={{ justifyContent: 'center', alignItems: "center" }}>

                <Box sx={{ my: 2 }}>

                    <Typography sx={{
                        fontSize: { xs: 18, sm: 25, md: 33, lg: 35 },
                        fontWeight: "bold",
                        mt: 2,
                        fontFamily: "Kulim Park"
                    }}>Our Projects</Typography>

                    <Box sx={{
                        width: { xs: 80, sm: 100, md: 120, lg: 140 },
                        height: { xs: 1.5, sm: 1.5, md: 2, lg: 3 }, borderRadius: "10px",
                        bgcolor: "#A9A3A3", ml: 'auto'
                    }} />

                </Box>

                <Grid container sx={{
                    bgcolor: "", justifyContent: 'space-around',

                }}>
                    <Grid container xs={9} sm={9} md={8} lg={6.5} sx={{
                        // bgcolor: { xs: "green", sm: 'blue', md: 'yellow', lg: "red" },
                        justifyContent: 'space-between',
                        py: { xs: 1, sm: 1, md: 2, lg: 3 },
                        borderBottom: "2px solid #A9A3A3",

                    }}>

                        <Box sx={{
                            width: { xs: 100, sm: 200, md: 250, lg: 300 },
                            height: { xs: 80, sm: 140, md: 180, lg: 200 },
                            bgcolor: "blue",
                            backgroundImage: `url('https://images.pexels.com/photos/19583422/pexels-photo-19583422/free-photo-of-part-of-a-modern-architecture.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                            backgroundSize: "cover",
                            backgroundPosition: 'center',
                        }}>

                        </Box>


                        <Box sx={{
                            width: { xs: 100, sm: 200, md: 250, lg: 300 },
                            height: { xs: 80, sm: 140, md: 180, lg: 200 },
                            bgcolor: "blue",
                            backgroundImage: `url('https://images.pexels.com/photos/19583422/pexels-photo-19583422/free-photo-of-part-of-a-modern-architecture.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                            backgroundSize: "cover",
                            backgroundPosition: 'center',
                        }}>

                        </Box>


                    </Grid>
                </Grid>


            </Grid>
        </Grid >
    )
}
