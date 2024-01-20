"use client"
import { Grid, Typography } from '@mui/material'
import React from 'react'
import BannerCommen from '../Components/BannerCommen'

export default function page() {
    return (
        <Grid container sx={{
            mt: 10,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: -1,
        }}>

            <BannerCommen Heading="Completed Project" />


            <Grid container lg={11} bgcolor="" sx={{
                justifyContent: 'inherit',
                // bgcolor: 'gray',
                my: { xs: 2, lg: 6 },
            }}>

                {
                    [1, 2, 3, 4, 5, 6].map((data, index) =>
                        <Grid container xs={4.8} sm={3.3} md={3.5} lg={3.4} sx={{
                            // bgcolor: { xs: 'red', sm: 'green', md: 'blue', lg: 'orange' },
                            justifyContent: 'center',
                            m: { xs: 2, sm: 1, md: 1, lg: 0 },
                            my: { xs: 1, sm: 1, md: 2, lg: 2 }

                        }}>

                            <Grid container md={11} lg={10} sx={{
                                // bgcolor: "red",
                                justifyContent: 'center',
                                height: { xs: 100, sm: 150, md: 190, lg: 200 },
                                backgroundImage: `url('/Assets/Images/bg2.jpeg')`,
                                backgroundSize: "cover",
                                backgroundPosition: 'center',
                            }} />

                            <Grid md={11} lg={10} container sx={{
                                mt: { xs: .5, sm: .5, md: 1, lg: 1 }
                            }}>
                                <Typography sx={{
                                    fontSize: { xs: 10, sm: 15, md: 15, lg: 18 },
                                    fontWeight: "", fontFamily: "Kulim Park",
                                }}>Architecture Meets Aspiration</Typography>
                            </Grid>



                        </Grid>)
                }







            </Grid>






        </Grid >
    )
}
