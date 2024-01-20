"use client";
import { Box, Grid, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();

  const pathName = usePathname();

  console.log(pathName);

  const headrDaata = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Videos",
      path: "/videos",
    },
    {
      name: "Testimonials",
      path: "/testimonials",
    },
    {
      name: "Contact Us",
      path: "/testimonials",
    },
  ];

  return (
    <Grid
      container
      sx={{
        // bgcolor: "red",
        bgcolor: "#000",
        position: "fixed",
        top: 0,
        // boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
        alignItems: "center",
        display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
        zIndex: 500,
      }}
    >
      <Box
        onClick={() => router.push("/")}
        component="img"
        src="/Assets/logo.png"
        sx={{
          bgcolor: "",
          width: 70,
          height: 70,
          ml: 5,
          py: 1,
        }}
      />

      <Grid
        container
        md={6}
        lg={6}
        sx={{
          bgcolor: "",
          ml: "auto",
          mr: 20,
          justifyContent: "space-around",
        }}
      >
        {[
          {
            text: "Home",
            path: "/",
          },
          {
            text: "Gallery",
            path: "/gallery",
          },
          {
            text: "About Us",
            path: "/about",
          },
          {
            text: "Career",
            path: "/career",
          },
          {
            text: "Contact Us",
            path: "/contact",
          },
        ].map((data, index) => (
          <Typography
            onClick={() => router.push(`${data.path}`)}
            sx={{
              fontSize: 20,
              cursor: "pointer",
              fontWeight: 600,
              borderBottom: pathName == data.path ? "4px solid #FFAF00" : null,
              color: pathName == data.path ? "#FFAF00" : "#FFF",
              py: 0.5,
              fontFamily: "M PLUS 2",
              "&:hover": {
                fontWeight: "bold",
                // color: "#FFAF00"
              },
            }}
          >
            {data.text}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
}
