import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function BannerCommen(props: any) {

    const { Heading } = props

    return (
        <Grid container sx={{
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'center', md: 'start' },
            height: { xs: 150, md: 250, lg: 300 },
            backgroundImage: `url('/Assets/Images/bg2.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: 'center',

        }}>
            <Typography sx={{
                fontSize: { xs: 22, sm: 25, md: 33, lg: 40 },
                fontWeight: "bold",
                color: '#FFF',
                ml: { md: 10, lg: 15 },
                fontFamily: "Kulim Park",
            }}>{Heading}</Typography>
        </Grid>
    )
}
