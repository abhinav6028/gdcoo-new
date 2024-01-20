"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Banner() {
  const a =
    "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <Grid
      container
      bgcolor="red"
      sx={{
        height: "87vh",
        mt: { lg: 10 },
        backgroundImage:
          'url("https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        zIndex: 15,
      }}
    >
      <Grid
        container
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          xs={11}
          sm={11}
          md={10}
          lg={11}
          sx={{ bgcolor: "", justifyContent: "center" }}
        >
          <Typography
            sx={{
              color: "#FFFF",
              width: { xs: "95%", lg: "100%" },
              fontSize: { xs: 25, sm: 40, md: 55, lg: 50 },
              fontFamily: "M PLUS 2",
              fontWeight: { xs: 600, lg: 700 },
              lineHeight: { xs: 1.3, lg: 1.2 },
              textAlign: "center",
            }}
          >
            From Aspirations to
          </Typography>

          <Typography
            sx={{
              color: "#FFFF",
              width: { xs: "100%", lg: "100%" },
              fontSize: { xs: 25, sm: 40, md: 55, lg: 50 },
              fontFamily: "M PLUS 2",
              fontWeight: { xs: 600, lg: 700 },
              lineHeight: { xs: 1.3, lg: 1.2 },
              textAlign: "center",
            }}
          >
            Achievements Nurturing
          </Typography>

          <Typography
            sx={{
              color: "#FFFF",
              width: { xs: "100%", lg: "100%" },
              fontSize: { xs: 25, sm: 40, md: 55, lg: 50 },
              fontFamily: "M PLUS 2",
              fontWeight: { xs: 600, lg: 700 },
              lineHeight: { xs: 1.3, lg: 1.2 },
              textAlign: "center",
            }}
          >
            Ideal Realities
          </Typography>

          <Grid
            container
            xs={11}
            sm={9}
            md={9}
            lg={3}
            sx={{
              // bgcolor: { xs: "red", sm: "blue", md: "green" },
              justifyContent: {
                xs: "space-evenly",
                md: "space-evenly",
                lg: "space-between",
              },
              mt: { xs: 3, sm: 3, md: 7, lg: 3 },
            }}
          >
            {[
              {
                text: "Enquir Now",
              },
              {
                text: "Contact Us",
              },
            ].map((data, index) => (
              <Typography
                sx={{
                  bgcolor: "#ffaf00",
                  width: "fit-content",
                  textAlign: "center",
                  py: { xs: 1, sm: 1.3, md: 2.5, lg: 1.2 },
                  px: { xs: 2, sm: 4, md: 8, lg: 4 },
                  borderRadius: "7px",
                  fontWeight: 550,
                  cursor: "pointer",
                  fontSize: { xs: 15, sm: 15, md: 17, lg: 19 },
                  "&:hover": {
                    bgcolor: "transparent",
                    border: "3px solid #ffaf00",
                    borderRadius: "10px",
                    transition: "1.5s",
                    color: "#FFF",
                  },
                }}
              >
                {data.text}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
