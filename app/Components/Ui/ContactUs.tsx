import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function ContactUs() {
  return (
    <Grid
      container
      sx={{
        bgcolor: "#000",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 2, sm: 5, md: 8, lg: 9 },
      }}
    >
      <Grid container sx={{ justifyContent: "center" }} lg={11}>
        <Grid
          container
          sx={{ bgcolor: "", alignItems: "center" }}
          md={5}
          lg={5}
        >
          <Grid
            sx={{
              ml: 2,
              my: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 26, sm: 25, md: 33, lg: 35 },
                fontWeight: "bold",
                fontFamily: "M PLUS 2",
                ml: { xs: 1, sm: 2, md: 3 },
                color: "#885D5B",
              }}
            >
              Let,s Build Something
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 15, sm: 15, md: 17, lg: 19 },
                width: { xs: "80%", sm: "80", md: "100%", lg: "70%" },
                mt: { xs: 2, sm: 0, md: 0, lg: 1 },
                fontFamily: "M PLUS 2",
                ml: { xs: 1, sm: 2, md: 3 },
                color: "#885D5B",
                // fontFamily: "Kulim Park",
              }}
            >
              Comment your suggestions and reviews in the box and let’s grow
              together.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{ bgcolor: "", justifyContent: "center" }}
          md={5}
          lg={5}
        >
          <form action="" style={{ width: "100%" }}>
            <Grid
              container
              md={11}
              lg={11}
              sx={{
                bgcolor: "",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "space-between",
                },
              }}
            >
              <Grid
                container
                xs={11}
                sm={11}
                md={5.5}
                sx={{
                  height: "fit-content",
                  mt: { xs: 3, sm: 4, md: 0, lg: 0 },
                }}
              >
                <Grid
                  container
                  sx={{
                    height: 45,
                    justifyContent: "center",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Name"
                    className="input-with-padding"
                  />
                </Grid>
              </Grid>

              <Grid
                container
                xs={11}
                sm={11}
                md={5.5}
                sx={{
                  height: "fit-content",
                  mt: { xs: 3, sm: 4, md: 0, lg: 0 },
                }}
              >
                <Grid
                  container
                  sx={{
                    height: 45,
                    justifyContent: "center",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Email"
                    className="input-with-padding"
                  />
                </Grid>
              </Grid>

              <Grid
                container
                xs={11}
                sm={11}
                md={12}
                lg={12}
                sx={{
                  height: 150,
                  // mt: 3
                  mt: { xs: 3, sm: 4, md: 3, lg: 3 },
                }}
              >
                <textarea
                  className="textarea-with-padding"
                  rows={4}
                  placeholder="Message"
                />
              </Grid>

              <Grid container xs={11} sm={11} md={12}>
                <Typography
                  sx={{
                    color: "#FFAF00",
                    ml: "auto",
                    my: { xs: 3, sm: 3, md: 3, lg: 4 },
                    fontSize: { xs: 14, sm: 18, lg: 15 },
                    letterSpacing: { xs: 2, lg: 4 },
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "#999",
                      py: { xs: 0.5, sm: 0.5, md: 1, lg: 1 },
                      transition: ".5s",
                      px: { xs: 1, sm: 1, md: 2 },
                    },
                  }}
                >
                  {" "}
                  - SUBMIT{" "}
                </Typography>
              </Grid>
            </Grid>

            {/* SOME ERRORS MAY BE READY TO PUSH AND ALSO PUSH AS WELL AS  */}
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactUs;
