"use client"
import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function ReadyToWork() {
    return (
        <Grid xs={11} sm={11} md={11} lg={11} container sx={{
            // bgcolor: { xs: "green", sm: 'blue', md: 'yellow', lg: "red" },
            bgcolor: '#FFAF00',
            justifyContent: 'center', alignItems: "center",
            my: { xs: 4, sm: 2, md: 4, lg: 7 },
            borderRadius: '10px'
        }}>
            <Grid container xs={11} sm={11} md={10} lg={11} sx={{
                py: { xs: 2, sm: 3, md: 5, lg: 8 }
            }}>

                <Grid container sm={8} md={8} lg={8} sx={{ bgcolor: "" }}>
                    <Typography sx={{
                        fontSize: { xs: 15, sm: 25, md: 27, lg: 30 },
                        fontWeight: 'bold',
                        textAlign: 'center',
                        ml: { xs: 2 },
                        fontFamily: "Kulim Park"

                    }}>
                        Ready to <span style={{ color: '#FFF' }}>WORK</span> together
                    </Typography>

                    <Typography sx={{
                        fontSize: { xs: 13, sm: 15, md: 17, lg: 20 },
                        textAlign: 'start',
                        mt: { xs: 1, sm: 1, md: 1.5, lg: 1.5 }, width: { xs: "90%", sm: '100%', md: '100%', lg: '80%' },
                        ml: { xs: 2 }
                    }}>
                        Welcome to the epitome of construction excellence! Our construction company stands as a beacon of
                        innovation, craftsmanship, and reliability
                    </Typography>

                </Grid>



                <Grid container sm={4} md={4} lg={4} sx={{
                    bgcolor: "", alignItems: 'center', justifyContent: "center",
                    mt: { xs: 2 }
                }}>

                    <Typography sx={{
                        fontSize: { xs: 15, sm: 17, md: 19, lg: 22 },
                        bgcolor: "#FFF",
                        py: { xs: 1.5, sm: 2, lg: 2.5 },
                        px: { xs: 4, sm: 5, lg: 8 },
                        borderRadius: '10px',
                        fontWeight: 'bold', cursor: "pointer",
                        fontFamily: "Kulim Park",
                        '&:hover': {
                            bgcolor: "red",

                        }
                    }}>
                        Work with us
                    </Typography>

                </Grid>



            </Grid>
        </Grid >
    )
}
