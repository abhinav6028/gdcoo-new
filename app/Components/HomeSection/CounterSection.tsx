"use client"
import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function CounterSection() {

    // const [count, setCount] = useState(0);

    // useEffect(() => {

    //     setInterval(() => setCount((oldCount) => oldCount + 1), 40);

    // }, []);

    // console.log("count", count);



    return (
        <Grid xs={10} sm={9} md={9} lg={6.5} container sx={{
            justifyContent: 'space-between', alignItems: "center",
            // bgcolor: { xs: "green", sm: 'blue', md: 'yellow', lg: "red" },
            mt: 4,
            py: { xs: 0, sm: 4, md: 6, lg: 6 },
            borderBottom: { xs: "", sm: "2px solid #A9A3A3", }
        }}>

            {
                [
                    {
                        num: 100,
                        type: "+",
                        text: 'Employees'
                    },
                    {
                        num: 50,
                        type: "",
                        text: 'Years'
                    },
                    {
                        num: 100,
                        type: "M",
                        text: 'Square ft build'
                    },
                    {
                        num: 1500,
                        type: "+",
                        text: 'Happy Clients'
                    },

                ].map((data, index) =>
                    <Grid container sx={{
                        // bgcolor: "green",
                        width: { xs: 70, sm: 110, md: 150, lg: 180 },
                        height: { xs: 90, sm: 100, md: 140, lg: 140 },
                        justifyContent: 'center', alignItems: 'center',
                        borderRadius: '10px',
                        boxShadow: { sm: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px", md: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px", lg: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" },

                    }}>


                        <Box>
                            <Typography sx={{
                                fontSize: { xs: 15, sm: 25, md: 27, lg: 33 },
                                fontWeight: 'bold',
                                textAlign: 'center',
                                fontFamily: 'M PLUS 2'
                            }}> {data.num}{data.type} </Typography>

                            <Typography sx={{
                                fontSize: { xs: 10, sm: 15, md: 17, lg: 17 },
                                textAlign: 'center',
                            }}>{data.text}</Typography>

                        </Box>

                    </Grid>
                )
            }



        </Grid >
    )
}
