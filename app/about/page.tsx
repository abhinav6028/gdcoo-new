"use client"
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import BannerCommen from '../Components/BannerCommen'


export default function page() {
    return (
        <Grid container sx={{
            mt: 10,
            justifyContent: "center"
        }}>

            <BannerCommen Heading="About Us" />

            <Grid container sx={{
                justifyContent: "center",
                my: 6
            }}>


                <Grid container xs={10} sm={10} md={7} lg={7} sx={{
                    bgcolor: ""
                }}>

                    <Typography sx={{
                        fontSize: { xs: 18, sm: 25, md: 33, lg: 35 },
                        fontWeight: 700, fontFamily: "Kulim Park",
                        // ml: { sm: 6, md: 0 }
                    }}>About Company</Typography>

                    <Typography sx={{
                        fontSize: { xs: 14, sm: 15, md: 17, lg: 18 },
                        width: { xs: "100%", sm: "70", md: "90%", lg: "80%" },
                        mt: 3,
                        lineHeight: { xs: 1.7, md: 1.5 },
                        fontWeight: '', fontFamily: "Playfair Display",
                    }}>
                        In the dynamic realm of construction, our company stands as a formidable force, shaping
                        landscapes and forging the future with every brick laid and beam raised. Committed to
                        excellence, we bring dreams to life through a synergy of innovation, expertise, and
                        unwavering dedication. From groundbreaking designs to the final touch of craftsmanship,
                        our team of skilled professionals ensures that each project is a testament to precision and
                        quality. With a foundation rooted in experience, we navigate the complexities of construction
                        with a forward-thinking approach, embracing sustainability and cutting-edge technology.
                        As a trusted partner in building aspirations, we take pride in creating structures that not only
                        stand tall but also stand the test of time. Welcome to a construction journey where every
                        blueprint transforms into a legacy of strength, reliability, and architectural brilliance.
                    </Typography>

                </Grid>



                <Grid container md={4} lg={4} sx={{
                    bgcolor: "",
                    justifyContent: 'center',
                    alignItems: "center",
                    mt: { xs: 4, sm: 5, md: 0 }
                }}>

                    <Box
                        component="img"
                        src='/Assets/logo.png'
                        sx={{
                            height: { xs: 220, sm: 250, md: 290, lg: 320 },
                            width: { xs: 220, sm: 250, md: 290, lg: 320 },
                        }}
                    />

                </Grid>



            </Grid>

            <Grid xs={10} sm={9} md={9} lg={6} container sx={{
                justifyContent: 'space-between', alignItems: "center",
                // borderBottom: { xs: "", sm: "2px solid #A9A3A3", }
            }}>

                <Grid container>
                    <Typography sx={{
                        fontSize: { xs: 18, sm: 25, md: 27, lg: 23 },
                        fontWeight: 'bold',
                        urlAlign: 'center', fontFamily: "Kulim Park",
                    }}> Services</Typography>

                </Grid>


                {/* {
                    [
                        {
                            text: "Commercial Projects",
                            url: '/Assets/Services/building.png'
                        },
                        {
                            text: "Residential Projects",
                            url: '/Assets/Services/interior.png'
                        },
                        {
                            text: "Interior Projects",
                            url: '/Assets/Services/residential.png'
                        }


                    ].map((data, index) =>


                        <Grid sx={{}}>

                            <Grid container
                                component='img'
                                src={data.url}
                                sx={{
                                    // bgcolor: "green",
                                    width: { xs: 70, sm: 110, md: 100, lg: 130 },
                                    height: { xs: 70, sm: 110, md: 100, lg: 130 },
                                    justifyContent: 'center', alignItems: 'center',
                                    mt: 2
                                }}>


                            </Grid>

                            <Typography sx={{
                                mt: { xs: 1, md: 2, lg: 2 },
                                fontSize: { xs: 10, sm: 15, md: 17, lg: 20 },
                                fontWeight: 'bold',
                                color: '#FFAF00',
                                fontFamily: "Kulim Park",
                            }}>{data.text}</Typography>

                        </Grid>

                    )
                } */}

            </Grid>

           

        </Grid>
    )
}
